import os

APP_DIR = 'pkg/altium/assets/client/js/app'

def find_app_def():
    for filename in os.listdir(APP_DIR):
        if not filename.endswith('.js'):
            continue
            
        path = os.path.join(APP_DIR, filename)
        with open(path, 'r') as f:
            content = f.read()
            
        if 'window.__APP__' in content:
            print(f"Found 'window.__APP__' in {filename}")
            # Check context
            idx = content.find('window.__APP__')
            print(f"Context: {content[idx:idx+100]}")

            if 'window.__APP__ =' in content or 'window.__APP__=' in content:
                 print(f"DEFINES __APP__ in {filename}")
                 
if __name__ == '__main__':
    find_app_def()
