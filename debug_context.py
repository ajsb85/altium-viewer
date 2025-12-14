APP_JS_PATH = 'pkg/altium/assets/client/js/app.js'
with open(APP_JS_PATH, 'r') as f:
    content = f.read()
    pos = content.find('69668:')
    print(content[pos:pos+200])
