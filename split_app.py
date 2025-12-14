import re
import os

APP_JS_PATH = 'pkg/altium/assets/client/js/app.js'
OUTPUT_DIR = 'pkg/altium/assets/client/js/app'

def split_app_js():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    with open(APP_JS_PATH, 'r') as f:
        content = f.read()

    # Find the start of the modules object
    # It usually follows the pattern: .push([ [ids], {
    # We'll look for the first occurrence of '{' after the chunk IDs array, 
    # but given the file structure, we can look for the first module key pattern.
    
    # Regex to find the start of a module definition: key: (args) => {
    # We use this to identify where modules begin.
    module_start_regex = re.compile(r'^\s*(\d+):\s*\((.*?)\)\s*=>\s*\{', re.MULTILINE)
    
    matches = list(module_start_regex.finditer(content))
    
    print(f"Found {len(matches)} potential modules.")

    for i, match in enumerate(matches):
        module_id = match.group(1)
        start_index = match.start()
        
        # Determine the end of this module. 
        # It's either the start of the next module (minus comma/whitespace)
        # or the end of the modules object.
        
        # To be safe, let's use a brace counter starting from the opening brace of the function body.
        # The function body starts at match.end() - 1 (since the regex ends with '{')
        
        body_start = match.end() - 1 
        current_index = body_start
        brace_count = 0
        
        # Advance slightly to get inside the brace
        # But actually, let's just count from body_start
        
        # We need to scan explicitly to handle nested braces correcty
        for j in range(current_index, len(content)):
            char = content[j]
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_index = j + 1
                    break
        
        # Extract the full module text
        # We want "12345: (e, t, n) => { ... }"
        # But maybe just the function body? The user asked to "split the file".
        # Keeping the key and assignment makes it clear, but usually "chunks" implies the code itself.
        # Let's save the whole "key: value" part to be safe, or maybe just the function?
        # "split the file in small files"
        # Let's write the full "54105: (e, t, n) => { ... }" module definition for now.
        # It's easier to paste back if needed.
        
        module_content = content[start_index:end_index]
        
        output_path = os.path.join(OUTPUT_DIR, f"{module_id}.js")
        with open(output_path, 'w') as out_f:
            out_f.write(module_content)
            
        if i % 100 == 0:
            print(f"Extracted module {module_id}")

    print("Extraction complete.")

if __name__ == '__main__':
    split_app_js()
