# Altium Viewer Storybook

Vue 3 component library for the Altium Online Viewer, developed and tested in isolation with Storybook.

## Quick Start

```bash
cd storybook
npm install
npm run storybook
```

**Storybook:** <http://localhost:6006>  
**MCP Server:** <http://localhost:6006/mcp>

## Project Structure

```txt
storybook/
├── .storybook/           # Storybook configuration
├── src/
│   ├── assets/           # Sample images for stories
│   ├── components/       # Vue components with stories
│   ├── composables/      # Vue composables (useLazyLoad, etc.)
│   └── styles/           # production.css reference
└── package.json
```

## Production Reference Sources

When developing components, use these production files as the source of truth:

| Resource | Path | Usage |
|----------|------|-------|
| **Production CSS** | `src/styles/production.css` | Copy exact CSS for pixel-perfect styling |
| **vendors.js** | `pkg/altium/assets/client/js/vendors.js` | Reference for component logic, directives |
| **Plugin components** | `pkg/altium/assets/client/js/plugins/` | Original component implementations |

## AI Agent Integration (MCP)

This Storybook has an MCP server for AI agent integration:

```bash
# Connect Claude Code
claude mcp add storybook-mcp --transport http http://localhost:6006/mcp --scope project

# Test MCP
curl -X POST http://localhost:6006/mcp -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "id": 1, "method": "tools/list", "params": {}}'
```

### MCP Tools Available

- `get-story-urls` - Get direct URLs to specific stories
- `get-ui-building-instructions` - Get UI development guidelines

## Component Development Workflow

### 1. Find Production Reference

```bash
# Search for component in production
grep -r "ComponentName" pkg/altium/assets/client/js/

# Find CSS
grep -n ".component-class" storybook/src/styles/production.css
```

### 2. Create Component Matching Production

- Copy HTML structure from production
- Copy CSS from `production.css` (remove `data-v-*` scoped selectors)
- Match all class names and nesting

### 3. Write Stories with Controls

```typescript
const meta: Meta<typeof Component> = {
  component: Component,
  tags: ['autodocs'],
  parameters: { controls: { expanded: true } },
  argTypes: {
    propName: { control: 'text', description: 'Prop description' }
  }
};
```

### 4. Add Play Functions for Interaction Testing

```typescript
export const Interactive: Story = {
  play: async ({ canvasElement, step }) => {
    await step('Click button', async () => {
      const btn = canvasElement.querySelector('button');
      btn?.click();
    });
  }
};
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start dev server (port 6006) |
| `npm run build-storybook` | Build static Storybook |
| `npm run test-storybook` | Run Playwright interaction tests |
| `npm run chromatic` | Visual regression testing |

## Component Status

**Total: 65 story files** | **15 with argTypes** | **12 with play functions**

### Fully Enhanced (argTypes + play functions)
| Component | Production CSS | argTypes | Play Functions |
|-----------|---------------|----------|----------------|
| LibLazyImage | ✓ | ✓ | ✓ |
| PreviewItem | ✓ | ✓ | ✓ |
| PreviewPanel | ✓ | ✓ | ✓ |
| AfsBadge | - | ✓ | ✓ |
| Accordion | - | ✓ | ✓ |
| AppLoader | - | ✓ | - |
| BoardItemsVisibility | - | ✓ | ✓ |
| TreeItem | - | ✓ | ✓ |
| AfsIcon | ✓ | ✓ | - |

### Need Enhancement
Run `grep -l "argTypes" src/components/*.stories.ts` to see which files have argTypes.

## License

MIT
