import os
import requests
import urllib.parse

# Configuration from embed.js
VIEWER_DOMAIN = "https://viewer.altium.com"
CLIENT_BASE = "/client/"
PLUGINS = {
    "bomview": "js/plugins/BOMView.js",
    "bomviewonpremise": "js/plugins/BOMViewOnPremise.js",
    "comparedocument": "js/plugins/CompareDocument.js",
    "comparelayers": "js/plugins/CompareLayers.js",
    "comparepanel": "js/plugins/ComparePanel.js",
    "download": "js/plugins/Download.js",
    "export": "js/plugins/Export.js",
    "exportonpremise": "js/plugins/ExportOnPremise.js",
    "fabricationcommentpanel": "js/plugins/FabricationCommentPanel.js",
    "fullscreen": "js/plugins/FullScreen.js",
    "gerbercomparemeasurement": "js/plugins/GerberCompareMeasurement.js",
    "gerbercompareview": "js/plugins/GerberCompareView.js",
    "gerberview": "js/plugins/GerberView.js",
    "helppanel": "js/plugins/HelpPanel.js",
    "measurement": "js/plugins/Measurement.js",
    "pcbview": "js/plugins/PCBView.js",
    "pcbview3d": "js/plugins/PCBView3D.js",
    "previewpanel": "js/plugins/PreviewPanel.js",
    "schview": "js/plugins/SCHView.js",
    "schcompareview": "js/plugins/SchCompareView.js",
    "search": "js/plugins/Search.js",
    "select": "js/plugins/Select.js",
    "snapping": "js/plugins/Snapping.js",
    "supportlibrary": "js/plugins/SupportLibrary.js",
    "variants": "js/plugins/Variants.js",
    "layers": "js/plugins/layers.js",
    "comparison.gerber": "js/plugins/comparison.gerber.js",
    "gerber": "js/plugins/gerber.js",
    "graphite.engine": "js/plugins/graphite.engine.js",
    "pcb": "js/plugins/pcb.js",
    "sch": "js/plugins/sch.js",
    "schcompare": "js/plugins/schCompare.js",
    "search.engine": "js/plugins/search.engine.js"
}

OUTPUT_BASE = "pkg/altium/assets/client"

def download_file(url, local_path):
    print(f"Downloading {url} to {local_path}...")
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        os.makedirs(os.path.dirname(local_path), exist_ok=True)
        with open(local_path, 'wb') as f:
            f.write(response.content)
        print("Success.")
    except Exception as e:
        print(f"Failed: {e}")

# 1. Download index.html
index_url = VIEWER_DOMAIN + CLIENT_BASE + "index.html"
index_path = os.path.join(OUTPUT_BASE, "index.html")
download_file(index_url, index_path)

# 2. Download Plugins
for name, rel_path in PLUGINS.items():
    plugin_url = VIEWER_DOMAIN + CLIENT_BASE + rel_path
    local_path = os.path.join(OUTPUT_BASE, rel_path)
    download_file(plugin_url, local_path)

# 3. Download Core Bundles (from index.html)
CORE_ASSETS = [
    "js/runtime.js",
    "js/vendors.js",
    "js/app.js",
    "js/appStyles.css",
    "js/vue.js"
]

for rel_path in CORE_ASSETS:
    url = VIEWER_DOMAIN + CLIENT_BASE + rel_path
    local_path = os.path.join(OUTPUT_BASE, rel_path)
    download_file(url, local_path)

print("Asset download complete.")
