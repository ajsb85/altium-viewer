import re

APP_JS_PATH = 'pkg/altium/assets/client/js/app.js'

def scan_offsets():
    with open(APP_JS_PATH, 'r') as f:
        content = f.read()

    # Regex for module start
    # We use the loose one
    regex = re.compile(r'([0-9]+):\s*\(')
    
    matches = []
    for m in regex.finditer(content):
        matches.append((m.group(1), m.start()))
        
    # Sort by offset
    matches.sort(key=lambda x: x[1])
    
    for mid, offset in matches:
        print(f"Module {mid} starts at {offset}")

if __name__ == '__main__':
    scan_offsets()
