import re

APP_JS_PATH = 'pkg/altium/assets/client/js/app.js'
OUTPUT_FILE = 'pkg/altium/assets/client/js/app/65294.js'
START_OFFSET = 6297
MODULE_ID = '65294'

def extract_resilient():
    with open(APP_JS_PATH, 'r') as f:
        content = f.read()

    # Find start
    if not content.startswith(f'{MODULE_ID}:', START_OFFSET):
        print(f"Could not verify start of {MODULE_ID} at {START_OFFSET}")
        # Search nearby
        idx = content.find(f'{MODULE_ID}: (', START_OFFSET - 100, START_OFFSET + 100)
        if idx != -1:
            start_pos = idx
        else:
            return
    else:
        start_pos = START_OFFSET

    # Find body start
    body_start = content.find('{', start_pos)
    if body_start == -1:
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
        wrapped = f'(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([\n    [{MODULE_ID}],\n    {{\n{module_content}\n    }}\n]);'
        with open(OUTPUT_FILE, 'w') as out:
            out.write(wrapped)
        print(f"Successfully extracted {MODULE_ID}.js (Full)")
    else:
        print(f"Failed to find end of module {MODULE_ID}")

if __name__ == '__main__':
    extract_resilient()
