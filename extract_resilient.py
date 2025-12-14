import re

APP_JS_PATH = 'pkg/altium/assets/client/js/app.js'
OUTPUT_FILE = 'pkg/altium/assets/client/js/app/69668.js'

def extract_resilient():
    with open(APP_JS_PATH, 'r') as f:
        content = f.read()

    # Find start of 69668
    # We use the known offset from previous scan or finding it again.
    # Previous scan said 47247.
    start_pos = 47247
    # Verify
    if not content.startswith('69668:', start_pos):
        # Fallback search
        start_pos = content.find('69668: (')
        if start_pos == -1:
             print("Could not find 69668 start")
             return

    # Find body start
    body_start = content.find('{', start_pos)
    if body_start == -1:
        print("No body start")
        return

    # Scan forward with string skipping
    i = body_start
    brace_count = 0
    in_string = False
    string_char = ''
    escape = False
    
    length = len(content)
    end_pos = -1
    
    while i < length:
        char = content[i]
        
        if in_string:
            if escape:
                escape = False
            elif char == '\\':
                escape = True
            elif char == string_char:
                in_string = False
        else:
            if char == '"' or char == "'":
                in_string = True
                string_char = char
            elif char == '`':
                # Template literal - tricky if nested, but let's assume simple string for now or handle it
                in_string = True
                string_char = char 
            elif char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_pos = i + 1
                    break
        i += 1
        
    if end_pos != -1:
        module_content = content[start_pos:end_pos]
        # Wrap
        wrapped = f'(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([\n    [69668],\n    {{\n{module_content}\n    }}\n]);'
        with open(OUTPUT_FILE, 'w') as out:
            out.write(wrapped)
        print("Successfully extracted 69668.js (Full)")
    else:
        print("Failed to find end of module 69668")

if __name__ == '__main__':
    extract_resilient()
