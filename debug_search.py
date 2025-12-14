import re

APP_JS_PATH = 'pkg/altium/assets/client/js/app.js'

def debug_search():
    with open(APP_JS_PATH, 'r') as f:
        content = f.read()

    pos = content.find('69668:')
    if pos == -1:
        print("String '69668:' NOT found in app.js via find()")
    else:
        print(f"Found '69668:' at {pos}")
        print(f"Context: {content[pos:pos+50]}")

if __name__ == '__main__':
    debug_search()
