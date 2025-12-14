import os
import re

APP_DIR = 'pkg/altium/assets/client/js/app'

def wrap_chunks():
    for filename in os.listdir(APP_DIR):
        if not filename.endswith('.js'):
            continue
            
        filepath = os.path.join(APP_DIR, filename)
        with open(filepath, 'r') as f:
            content = f.read()
            
        # Extract module ID from the content "12345: (..."
        match = re.match(r'^\s*(\d+):', content)
        if not match:
            print(f"Skipping {filename}: Could not find module ID at start.")
            continue
            
        module_id = match.group(1)
        
        # Wrap the content
        # We use the module ID as the chunk ID as well for simplicity.
        # Structure: (self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([[CHUNK_ID], { MODULE_ID: ... }])
        
        # Note: 'content' is "ID: (args) => { ... }"
        # So we just need to wrap it in the object brace.
        
        wrapped_content = f'(self.webpackChunkaltium_web_viewer = self.webpackChunkaltium_web_viewer || []).push([\n    [{module_id}],\n    {{\n{content}\n    }}\n]);'
        
        with open(filepath, 'w') as f:
            f.write(wrapped_content)
            
        print(f"Wrapped {filename} (Module ID: {module_id})")

if __name__ == '__main__':
    wrap_chunks()
