import re

APP_JS_PATH = 'pkg/altium/assets/client/js/app.js'
OUTPUT_FILE = 'pkg/altium/assets/client/js/app/69668.js'

def extract_69668():
    with open(APP_JS_PATH, 'r') as f:
        content = f.read()

    # Find start
    start_str = "69668:"
    start_index = content.find(start_str)
    
    if start_index == -1:
        print("Could not find start string")
        return

    # Scan for body start brace
    body_start = content.find('{', start_index)
    if body_start == -1:
        print("Could not find body start brace")
        return

    current_index = body_start
    brace_count = 0
    found_end = False
    
    for j in range(current_index, len(content)):
        char = content[j]
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                end_index = j + 1
                found_end = True
                break
    
    if not found_end:
        print("Could not find end of module")
        return

    module_content = content[start_index:end_index]
    
    wrapped_content = f'(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([\n    [69668],\n    {{\n{module_content}\n    }}\n]);'

    with open(OUTPUT_FILE, 'w') as f:
        f.write(wrapped_content)
    print("Extracted 69668.js")

if __name__ == '__main__':
    extract_69668()
