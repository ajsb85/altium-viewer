# Altium Viewer Storybook - AI Agent Contributing Guidelines

Comprehensive guide for AI agents working on component QC and development.

---

## Table of Contents

- [Quick Start](#quick-start)
- [Resources](#resources)
- [MCP Integration](#mcp-integration)
- [Storybook Features](#storybook-features)
- [Component Development Workflow](#component-development-workflow)
- [Quality Checklist](#quality-checklist)
- [Components Status](#components-status)

---

## Quick Start

```bash
# Start Storybook (dev server at http://localhost:6006)
cd storybook && npm run storybook

# Build Storybook (output to storybook-static/)
cd storybook && npm run build-storybook

# Test MCP is working
curl -X POST http://localhost:6006/mcp -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "id": 1, "method": "tools/list", "params": {}}'
```

---

## Resources

### Production Assets

| Resource | Path | Description |
|----------|------|-------------|
| **Production CSS** | `storybook/src/styles/production.css` | ~40,000 lines of extracted production styles |
| **Production JS** | `pkg/altium/assets/client/js/vendors.js` | Vue components, directives, utilities |
| **Plugin Components** | `pkg/altium/assets/client/js/plugins/*.js` | BoardItemsVisibility, PreviewPanel, etc. |
| **Production HTML** | `storybook/src/assets/*.html` | Captured HTML structures (bom.html, etc.) |

### Storybook Assets

| Resource | Path | Description |
|----------|------|-------------|
| **SVG Sprite** | `storybook/src/assets/icons.svg` | All icons (injected via preview.ts) |
| **Dark Theme** | `storybook/src/styles/dark-theme.scss` | CSS variables for dark theme |
| **Global Styles** | `storybook/src/styles/global.scss` | Base styles and resets |

### Reference Documentation

| Resource | Path | Description |
|----------|------|-------------|
| **MCP Addon Docs** | `storybook-mcp/packages/addon-mcp/README.md` | MCP server documentation |
| **Vue Components List** | `storybook/vue-components.md` | All production Vue components |

---

## MCP Integration

### MCP Server

The Storybook MCP (Model Context Protocol) server is available at:
```
http://localhost:6006/mcp
```

### Available Tools

#### 1. `get-story-urls`
Retrieve direct URLs to specific stories.

**Request:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "get-story-urls",
    "arguments": {
      "stories": [
        {
          "absoluteStoryPath": "/path/to/Component.stories.ts",
          "exportName": "Default"
        }
      ]
    }
  }
}
```

**Response:**
```json
{
  "result": {
    "content": [
      {"type": "text", "text": "http://localhost:6006/?path=/story/components-component--default"}
    ]
  }
}
```

#### 2. `get-ui-building-instructions`
Get standardized instructions for UI component development.

**Request:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "get-ui-building-instructions",
    "arguments": {}
  }
}
```

### MCP Workflow

1. **After creating/updating a component**, call `get-story-urls` to get URLs
2. **Provide URLs to user** for visual verification
3. **ALWAYS verify via browser** when possible before marking complete

### Example: Get Story URLs via curl

```bash
curl -s -X POST http://localhost:6006/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "get-story-urls",
      "arguments": {
        "stories": [
          {"absoluteStoryPath": "/home/ajsb8/dev/go-altium-viewer/storybook/src/components/BomView.stories.ts", "exportName": "ProductionBom"}
        ]
      }
    }
  }'
```

---

## Storybook Features

### argTypes and Controls

Define `argTypes` in story meta for interactive controls:

```typescript
const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
  argTypes: {
    // Text input
    label: {
      description: 'Button label text',
      control: 'text',
    },
    // Select dropdown
    variant: {
      description: 'Visual variant',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent'],
    },
    // Boolean toggle
    disabled: {
      description: 'Disable the button',
      control: 'boolean',
    },
    // Number slider
    size: {
      description: 'Size in pixels',
      control: { type: 'range', min: 10, max: 100, step: 5 },
    },
    // Color picker
    color: {
      description: 'Background color',
      control: 'color',
    },
    // Object editor
    data: {
      description: 'Data object',
      control: 'object',
    },
  },
  parameters: {
    controls: { expanded: true }, // Show all controls by default
  },
};
```

### Play Functions

Use `play` functions for interactive demos and assertions:

```typescript
import { userEvent, within, expect } from 'storybook/test';

export const InteractiveDemo: Story = {
  args: { /* ... */ },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click the button', async () => {
      const button = canvas.getByRole('button');
      await userEvent.click(button);
      await new Promise(r => setTimeout(r, 300)); // Wait for animation
    });

    await step('Type in the input', async () => {
      const input = canvas.getByPlaceholderText('Search');
      await userEvent.type(input, 'Hello', { delay: 50 });
    });

    await step('Verify result', async () => {
      const result = canvas.getByText('Hello');
      await expect(result).toBeInTheDocument();
    });
  },
};
```

### Common Play Function Patterns

```typescript
// Click elements
await userEvent.click(canvas.getByRole('button'));
await userEvent.click(canvas.getByText('Submit'));

// Type text
await userEvent.type(input, 'text', { delay: 50 });
await userEvent.clear(input);

// Keyboard events
await userEvent.type(input, '{enter}');
await userEvent.keyboard('{Escape}');

// Hover
await userEvent.hover(element);
await userEvent.unhover(element);

// Select queries
canvas.getByRole('button', { name: 'Submit' });
canvas.getByText('Hello');
canvas.getByPlaceholderText('Search');
canvas.getByTestId('my-element');
canvas.queryByText('Optional'); // Returns null if not found

// Assertions
await expect(element).toBeInTheDocument();
await expect(element).toHaveTextContent('text');
await expect(element).toBeVisible();
```

### Decorators

Wrap stories with decorators for consistent styling:

```typescript
const meta: Meta<typeof MyComponent> = {
  decorators: [
    // Add wrapper with styles
    () => ({
      template: '<div style="padding: 20px; background: #1c1c1e;"><story /></div>',
    }),
    // Fixed height container
    () => ({
      template: '<div style="height: 400px; display: flex;"><story /></div>',
    }),
  ],
};

// Per-story decorator
export const FullHeight: Story = {
  decorators: [
    () => ({
      template: '<div style="height: 100vh;"><story /></div>',
    }),
  ],
};
```

### Story Parameters

```typescript
export const MyStory: Story = {
  parameters: {
    layout: 'centered', // 'centered' | 'fullscreen' | 'padded'
    docs: {
      description: {
        story: 'Description shown in docs',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
};
```

---

## Component Development Workflow

### 1. Find Production Implementation

```bash
# Search for component in production JS
grep -rn "ComponentName" pkg/altium/assets/client/js/

# Find CSS classes
grep -n ".component-class" storybook/src/styles/production.css
```

### 2. Extract Production CSS

View `production.css` at identified line ranges:
```bash
sed -n '38813,38970p' storybook/src/styles/production.css
```

Copy EXACT styles, removing `[data-v-*]` scoped selectors.

### 3. Match HTML Structure

From production JS render functions, copy:
- Element hierarchy
- Class names (BEM: `.component-name`, `.component-name__element`, `.component-name--modifier`)
- Data attributes

### 4. Create Vue Component

```vue
<template>
  <!-- Match production HTML structure exactly -->
</template>

<script setup lang="ts">
/**
 * ComponentName - Description
 * 
 * Production CSS from production.css:XXXXX-XXXXX
 * Production JS from vendors.js:XXXXX-XXXXX
 */
defineOptions({ name: 'ComponentName' });

// Match production props, computed, methods
</script>

<style lang="scss">
/**
 * Production CSS from production.css:XXXXX-XXXXX
 */
// Paste production styles here
</style>
```

### 5. Create Stories

```typescript
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { userEvent, within, expect } from 'storybook/test';
import MyComponent from './MyComponent.vue';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
  argTypes: {
    // Define all props with controls
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Required stories:
export const Default: Story = { args: { /* default props */ } };
export const AllStates: Story = { /* show all visual states */ };
export const Interactive: Story = { play: async () => { /* demo interactions */ } };
```

### 6. Verify via MCP

After component is ready:
1. Call `get-story-urls` to get URLs
2. Provide URLs to user
3. If browser available, visually verify

---

## Quality Checklist

### Component Quality

- [ ] CSS matches production exactly (compare line-by-line)
- [ ] HTML structure matches production (class names, hierarchy)
- [ ] Props match production component interface
- [ ] TypeScript types defined for all props
- [ ] Component has `defineOptions({ name: 'ComponentName' })`
- [ ] JSDoc comment with production CSS/JS line references

### Story Quality

- [ ] `argTypes` defined for all props with descriptions
- [ ] `controls: { expanded: true }` in parameters
- [ ] At least 3 stories: Default, variant showcase, Interactive
- [ ] Play functions test key interactions
- [ ] Decorators for proper sizing/styling
- [ ] Story URLs provided via MCP

### Visual Quality

- [ ] Matches production in dark theme
- [ ] Hover states work correctly
- [ ] Focus states visible
- [ ] Animations/transitions match
- [ ] Icons render correctly (from SVG sprite)

---

## Components Status

### ✅ Complete

| Component | Production Match | Stories | Play Functions |
|-----------|-----------------|---------|----------------|
| LibLazyImage | ✓ | ✓ | ✓ |
| PreviewItem | ✓ | ✓ | ✓ |
| PreviewPanel | ✓ | ✓ | ✓ |
| AfsIcon | ✓ | ✓ | - |
| TreeItem | ✓ | ✓ | ✓ |
| LayerItem | ✓ | ✓ | ✓ |
| ObjectItem | ✓ | ✓ | ✓ |
| LibTable | ✓ | ✓ | ✓ |
| AfsSearch | ✓ | ✓ | ✓ |
| AfsLink | ✓ | ✓ | - |
| BomView | ✓ | ✓ | ✓ |

### 🔄 In Progress

| Component | Status |
|-----------|--------|
| BoardItemsVisibility | Partial implementation |
| Accordion | Needs stories update |

### ⏳ Next Priority

| Component | Production Reference |
|-----------|---------------------|
| AfsTypography | production.css:11800-12000 |
| AfsButton | production.css:8500-9000 |
| AfsInput | production.css:10000-10500 |
| AfsCheckbox | production.css:9271-9340 |
| TabPanel | production.css:38972-39050 |

---

## Useful Commands

```bash
# Find CSS for a class
grep -n "\.class-name" storybook/src/styles/production.css | head -5

# View specific lines of CSS
sed -n '38813,38970p' storybook/src/styles/production.css

# Search production JS for component
grep -n "ComponentName" pkg/altium/assets/client/js/vendors.js | head -10

# List all story files
find storybook/src -name "*.stories.ts" | sort

# Build and check for errors
cd storybook && npm run build-storybook 2>&1 | grep -E "(error|warning)" | head -20

# Test MCP tools/list
curl -s -X POST http://localhost:6006/mcp -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}' | jq .
```

---

## SVG Icons

Icons are defined in `storybook/src/assets/icons.svg` and injected globally via `preview.ts`.

### Icon ID Format

- Regular icons: `svg-sprite--{name}` (e.g., `#svg-sprite--eye-16-2`)
- Filled icons: `svg-sprite-filled--{name}` (e.g., `#svg-sprite-filled--icon-pads`)

### Using Icons

```vue
<svg class="icon" viewBox="0 0 16 16">
  <use href="#svg-sprite--search-16" />
</svg>
```

### Available Icons (Partial List)

| Category | Icons |
|----------|-------|
| Visibility | `eye-16-2`, `eye-off-16-2` |
| UI | `cross-16`, `plus-16`, `minus-16`, `search-16` |
| Navigation | `utility-chevron-down/up/left/right` |
| PCB Objects | `icon-arcs`, `icon-pads`, `icon-vias`, `icon-tracks`, `icon-fills`, etc. |

---

*Last updated: 2025-12-15*
