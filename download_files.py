import json
import os
import requests
import urllib.parse

# Define paths
json_file_path = 'requests/002_711b2e72-40a7-481e-929c-aaad7aada76d.json'
output_dir = 'downloads'

# Ensure output directory exists
os.makedirs(output_dir, exist_ok=True)

# Read JSON file
try:
    with open(json_file_path, 'r') as f:
        data = json.load(f)
except FileNotFoundError:
    print(f"Error: File {json_file_path} not found.")
    exit(1)

# Extract files
files = data.get('resBody', {}).get('data', {}).get('files', [])

if not files:
    print("No files found in keys: resBody -> data -> files")
    exit(0)

# Download files
for file_info in files:
    url = file_info.get('dataFileUrl')
    original_name = file_info.get('originalName')
    
    if not url or not original_name:
        print(f"Skipping incomplete entry: {file_info}")
        continue
        
    print(f"Downloading {original_name}...")
    
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        # Determine local path
        local_path = os.path.join(output_dir, original_name)
        
        # Save content
        with open(local_path, 'wb') as f:
            f.write(response.content)
            
        print(f"Saved to {local_path}")
        
    except Exception as e:
        print(f"Failed to download {original_name}: {e}")

print("Download complete.")
