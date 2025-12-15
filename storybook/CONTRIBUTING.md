# Contributing to Altium Viewer Storybook

We welcome contributions to the component library! Please follow these guidelines to ensure consistency and quality.

## Development Workflow

1. **Select a Component**: Check `vue-components.md` for the list of components that need to be implemented or documented.
2. **Create/Edit Component**:
    - Components reside in `src/components/`.
    - Dependencies (like `Afs*` UI components) should be utilized where possible.
3. **Create/Edit Story**:
    - Every component must have a corresponding `.stories.ts` file.
    - Define at least a `Default` story.
    - Use `args` to demonstrate different states and props.

## Writing Stories

We use Storybook Vue 3 with TypeScript.

```typescript
import type { Meta, StoryObj } from '@storybook/vue3';
import MyComponent from './MyComponent.vue';

const meta = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
  argTypes: {
    // Define controls for props
    variant: { control: 'select', options: ['primary', 'secondary'] },
  },
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
  },
};
```

## Testing Guidelines

All stories are automatically turned into tests by the `@storybook/addon-vitest` plugin.

1. **Run Tests Locally**: Always run `npx vitest run --project=storybook` before committing.
2. **Verify Build**: Run `npm run build-storybook` occasionally to ensure documentation builds are not broken by dependency changes.
3. **Fix Warnings**: If you see console warnings during strict mode or non-browser builds (e.g., `decodeEntities`), ensure they are handled or suppressed in `vitest.setup.ts` if acceptable.
4. **MDX**: If adding MDX documentation, ensure it matches the pattern in `main.ts` (`src/**/*.mdx`) to avoid "No story files found" warnings during testing.

## Commit Messages

Please use descriptive commit messages referencing the component being worked on.
