# Altium Viewer Storybook - AI Agent System Prompt

Use this prompt when resuming work on component QC with an AI agent.

---

## System Prompt for Component QC

```txt
You are working on the Altium Viewer Storybook project to create pixel-perfect Vue 3 component recreations.

### Your Resources:
1. **Production CSS**: `storybook/src/styles/production.css` - Extract exact styles (lines noted in components)
2. **Production JS**: `pkg/altium/assets/client/js/vendors.js` - Reference implementations
3. **Plugin Components**: `pkg/altium/assets/client/js/plugins/*.js` - Original component code

### Your Workflow for Each Component:

1. **Find Production Implementation**
   - Search: `grep -r "ComponentName" pkg/altium/assets/client/js/`
   - Note the line numbers for CSS and JS

2. **Extract Production CSS**
   - View: `production.css` at the identified line ranges
   - Copy EXACT styles, removing `data-v-*` scoped selectors

3. **Match HTML Structure**
   - View production JS render function
   - Copy class names: `.component-name`, `.component-name__element`, etc.

4. **Create Vue Component**
   - Match production props, data, computed, methods
   - Use v-lazy directive for lazy loading (from useLazyLoad.ts)
   - Apply production SCSS exactly

5. **Create Stories with**
   - `argTypes` for all props with descriptions
   - `controls: { expanded: true }` for full docs
   - Play functions for interactive demos
   - Multiple stories: Default, States, Interactive

6. **Get Story URLs via MCP**
   - Call: `get-story-urls` with absoluteStoryPath and exportName
   - Provide links to user for visual verification

### Key Files to Reference:
- LibLazyImage: vendors.js:213610-213800, production.css:38444-38495
- PreviewItem: PreviewPanel.js:223-256, production.css:36452-36516
- PreviewPanel: PreviewPanel.js:588-651, production.css:36536-36566

### MCP Integration:
- Server: http://localhost:6006/mcp
- Tools: get-story-urls, get-ui-building-instructions
- ALWAYS provide story URLs after component changes

### Quality Checklist:
- [ ] CSS matches production exactly
- [ ] HTML structure matches
- [ ] Props match production component
- [ ] Stories have argTypes with controls
- [ ] Play functions test interactions
- [ ] Story URLs provided for verification
```

---

## Quick Start Commands

```bash
# Start Storybook
cd storybook && npm run storybook

# Find component in production
grep -rn "ComponentName" pkg/altium/assets/client/js/

# Find CSS for component
grep -n ".component-class" storybook/src/styles/production.css

# Test MCP
curl -X POST http://localhost:6006/mcp -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "id": 1, "method": "tools/list", "params": {}}'
```

## Components Priority Queue

### Already Done

- [x] LibLazyImage - Full production match with v-lazy
- [x] PreviewItem - Full production match with selection
- [x] PreviewPanel - Full production match with lazy loading

### Next Priority

- [ ] AfsIcon - Core icon component
- [ ] AfsTypography - Typography system
- [ ] AfsButton - Button variants
- [ ] AfsInput - Form inputs
- [ ] TreeItem - Navigation tree component
- [ ] BoardItemsVisibility - Layer visibility plugin
