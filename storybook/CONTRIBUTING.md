# Contributing to Altium Viewer Storybook

## Development Workflow

1. Check `vue-components.md` for components to implement
2. Create component in `src/components/`
3. Create story file (`.stories.ts`)
4. Run tests before committing

## Writing Stories

```typescript
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, within } from 'storybook/test';
import MyComponent from './MyComponent.vue';

const meta: Meta<typeof MyComponent> = {
  title: 'Category/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { /* props */ },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('...')).toBeInTheDocument();
  },
};
```

## Testing Checklist

- [ ] Run component tests: `npx vitest --project=storybook`
- [ ] Check visual tests in Chromatic
- [ ] Verify build: `npm run build-storybook`
- [ ] Enable coverage and check gaps

## Storybook 10 Features

Use these features from NEWS.md:

- **Tags**: Add `tags: ['experimental']` for WIP components
- **Interaction tests**: Use `play` functions
- **Mock functions**: Use `fn()` from `storybook/test`

## Commit Messages

Reference the component being worked on:

```
feat(AfsBadge): add size variants
fix(SearchPanel): correct input focus behavior
```
