import re
import os

APP_JS_PATH = 'pkg/altium/assets/client/js/app.js'
OUTPUT_DIR = 'pkg/altium/assets/client/js/app'

def split_app_v2():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    with open(APP_JS_PATH, 'r') as f:
        content = f.read()

    # Find all module starts
    regex = re.compile(r'([0-9]+):\s*\(')
    matches = []
    for m in regex.finditer(content):
        matches.append({'id': m.group(1), 'start': m.start()})
        
    # Sort by start position
    matches.sort(key=lambda x: x['start'])
    
    # Process modules
    created_files = []
    
    for i in range(len(matches)):
        m = matches[i]
        module_id = m['id']
        start_pos = m['start']
        
        if i < len(matches) - 1:
            end_pos = matches[i+1]['start']
            # We need to trim the trailing comma/whitespace from the previous module.
            # Usually it ends with "}," or "}, "
            # So we look backwards from end_pos for the comma.
            # Safety: exact slicing is risky if we don't handle the boundary perfectly.
            # But extracting [start : next_start] includes the trailing characters.
            # We can clean it up effectively by wrapping it, but we need strictly the value.
            # "ID: VALUE,"
            # We want "VALUE".
            
            # Let's verify the separator.
            raw_chunk = content[start_pos:end_pos]
            
            # Remove the ID part "123: "
            # The regex matched "123: ("
            # So start_pos is at "123".
            # We want to keep the "123: (args) => { ... }" structure for now to easily Wrap it?
            # My wrapping script expects "123: ...".
            # But the trailing comma belongs to the OBJECT, not the module.
            
            # Let's find the last '}' in raw_chunk which closes the function.
            # This is still risky without parsing.
            
            # Strategy:
            # 1. Take raw_chunk.
            # 2. rfind('}') -> this should be the end of the function body.
            # 3. Everything after that (comma, newline) is trash.
            
            last_brace = raw_chunk.rfind('}')
            if last_brace != -1:
                 # Check if there are comments after?
                 # We can just take up to last_brace+1
                 module_code = raw_chunk[:last_brace+1]
            else:
                 print(f"Warning: No closing brace in chunk {module_id}")
                 module_code = raw_chunk # Fallback
            
        else:
            # Last module.
            # It ends at the end of the modules object.
            # We can use the same logic: find the last '}' that closes the module.
            # But we don't know where the object ends exactly without counting.
            # However, we know proper modules end with "}". 
            # We can scan from start_pos to finding the matching brace logic, but hopefully simpler now.
            # Or just take the rest of the file and trim the footer?
            # Footer is `}, (e) => { ...`.
            # We can search for the footer pattern?
            # Or just scan forward carefully.
            
            # Since it's the last one, let's just use the brace counting for this one only.
            # It worked for small files.
            # Actually, `10311` is the last one (Vue export).
            # content[start_pos:].
            # It's likely `10311: (e) => { e.exports = Vue; }`.
            
            sub_content = content[start_pos:]
            # Find first '{'
            b_start = sub_content.find('{')
            count = 0
            for k, char in enumerate(sub_content[b_start:], b_start):
                 if char == '{': count += 1
                 elif char == '}': 
                    count -= 1
                    if count == 0:
                        module_code = sub_content[:k+1]
                        break
    
        # Now wrap and save
        # module_code starts with "ID: ..."
        # strip ID?
        # My wrapping script logic:
        # match = re.match(r'^\s*(\d+):', content)
        # So we can keep it.
        
        # Cleanup: remove whitespace
        module_code = module_code.strip()
        
        # Wrap
        # module_id is already known
        # But module_code includes "ID: value".
        # We need "value" only for the object syntax `{ ID: value }`.
        # OR we can just paste "ID: value" inside `{ ... }`.
        
        # wrapped = `... .push([ [ID], { module_code } ])`
        
        wrapped_content = f'(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([\n    [{module_id}],\n    {{\n{module_code}\n    }}\n]);'
        
        out_path = os.path.join(OUTPUT_DIR, f"{module_id}.js")
        with open(out_path, 'w') as out_f:
            out_f.write(wrapped_content)
        
        created_files.append(f"{module_id}.js")
        print(f"Saved {module_id}.js")

    print(f"Split completed. Created {len(created_files)} files.")

if __name__ == '__main__':
    split_app_v2()
