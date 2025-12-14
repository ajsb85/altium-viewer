import re
import os

APP_JS_PATH = 'pkg/altium/assets/client/js/app.js'
OUTPUT_DIR = 'pkg/altium/assets/client/js/app'
TARGET_IDS = ['69668', '72768'] 

def extract_missing():
    with open(APP_JS_PATH, 'r') as f:
        content = f.read()

    # Relaxed regex: no start anchor
    module_regex = re.compile(r'([0-9]+):\s*\((.*?)\)\s*=>\s*\{')
    
    for match in module_regex.finditer(content):
        module_id = match.group(1)
        if module_id not in TARGET_IDS:
            continue
            
        print(f"Found {module_id}")
        start_index = match.start()
        
        # Determine end by brace counting
        body_start = match.end() - 1
        current_index = body_start
        brace_count = 0
        end_index = -1
        
        for j in range(current_index, len(content)):
            char = content[j]
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_index = j + 1
                    break
        
        if end_index != -1:
            module_content = content[start_index:end_index]
            wrapped_content = f'(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([\n    [{module_id}],\n    {{\n{module_content}\n    }}\n]);'
            
            output_path = os.path.join(OUTPUT_DIR, f"{module_id}.js")
            with open(output_path, 'w') as out_f:
                out_f.write(wrapped_content)
            print(f"Extracted {module_id}.js")
        else:
            print(f"Failed to find end for {module_id}")

if __name__ == '__main__':
    extract_missing()
