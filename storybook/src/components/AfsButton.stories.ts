import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { userEvent, within } from 'storybook/test';
import AfsButton from './AfsButton.vue';

/**
 * AfsButton - Production Button Component
 * 
 * Full-featured button with variants, sizes, loading states, and icons.
 * Production CSS from production.css:12261-12550
 */
const meta: Meta<typeof AfsButton> = {
  title: 'Components/AfsButton',
  component: AfsButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Visual style variant',
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'transparent', 'accent'],
    },
    size: {
      description: 'Button size',
      control: { type: 'select' },
      options: ['default', 'sm'],
    },
    wide: {
      description: 'Full width button',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
    },
    loading: {
      description: 'Loading state (shows spinner)',
      control: 'boolean',
    },
    icon: {
      description: 'Icon name from SVG sprite',
      control: 'text',
    },
    justify: {
      description: 'Content alignment',
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'space-between'],
    },
    arrow: {
      description: 'Show dropdown arrow',
      control: 'boolean',
    },
    rounded: {
      description: 'Rounded corners',
      control: 'boolean',
    },
    default: {
      description: 'Button text content',
      control: 'text',
      table: { category: 'Slots' },
    },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component: 'Primary button component with multiple variants and states.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default button
 */
export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => ({
    components: { AfsButton },
    setup() { return { args }; },
    template: '<AfsButton v-bind="args">Button</AfsButton>',
  }),
};

/**
 * Primary button - Main action
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    components: { AfsButton },
    setup() { return { args }; },
    template: '<AfsButton v-bind="args">Save Changes</AfsButton>',
  }),
};

/**
 * Secondary button - Secondary actions
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => ({
    components: { AfsButton },
    setup() { return { args }; },
    template: '<AfsButton v-bind="args">Cancel</AfsButton>',
  }),
};

/**
 * Transparent button - Minimal style
 */
export const Transparent: Story = {
  args: {
    variant: 'transparent',
  },
  render: (args) => ({
    components: { AfsButton },
    setup() { return { args }; },
    template: '<AfsButton v-bind="args">Learn More</AfsButton>',
  }),
};

/**
 * Accent button - Attention-grabbing action
 */
export const Accent: Story = {
  args: {
    variant: 'accent',
  },
  render: (args) => ({
    components: { AfsButton },
    setup() { return { args }; },
    template: '<AfsButton v-bind="args">Download</AfsButton>',
  }),
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  render: () => ({
    components: { AfsButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <AfsButton variant="default">Default</AfsButton>
        <AfsButton variant="primary">Primary</AfsButton>
        <AfsButton variant="secondary">Secondary</AfsButton>
        <AfsButton variant="transparent">Transparent</AfsButton>
        <AfsButton variant="accent">Accent</AfsButton>
      </div>
    `,
  }),
};

/**
 * Small size buttons
 */
export const SmallSize: Story = {
  render: () => ({
    components: { AfsButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <AfsButton variant="default" size="sm">Small</AfsButton>
        <AfsButton variant="primary" size="sm">Small Primary</AfsButton>
        <AfsButton variant="secondary" size="sm">Small Secondary</AfsButton>
      </div>
    `,
  }),
};

/**
 * Disabled states
 */
export const Disabled: Story = {
  render: () => ({
    components: { AfsButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <AfsButton variant="default" disabled>Disabled</AfsButton>
        <AfsButton variant="primary" disabled>Disabled Primary</AfsButton>
        <AfsButton variant="accent" disabled>Disabled Accent</AfsButton>
      </div>
    `,
  }),
};

/**
 * Loading states
 */
export const Loading: Story = {
  render: () => ({
    components: { AfsButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <AfsButton variant="default" loading>Loading</AfsButton>
        <AfsButton variant="primary" loading>Saving...</AfsButton>
        <AfsButton variant="accent" loading>Processing</AfsButton>
      </div>
    `,
  }),
};

/**
 * With icons
 */
export const WithIcons: Story = {
  render: () => ({
    components: { AfsButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <AfsButton variant="primary" icon="plus-16">Add Item</AfsButton>
        <AfsButton variant="default" icon="settings-16">Settings</AfsButton>
        <AfsButton variant="transparent" icon="search-16">Search</AfsButton>
      </div>
    `,
  }),
};

/**
 * Full width button
 */
export const Wide: Story = {
  decorators: [
    () => ({
      template: '<div style="width: 300px;"><story /></div>',
    }),
  ],
  args: {
    variant: 'primary',
    wide: true,
  },
  render: (args) => ({
    components: { AfsButton },
    setup() { return { args }; },
    template: '<AfsButton v-bind="args">Full Width Button</AfsButton>',
  }),
};

/**
 * Button group
 */
export const ButtonGroup: Story = {
  render: () => ({
    components: { AfsButton },
    template: `
      <div style="display: flex;">
        <AfsButton variant="secondary" :rounded="false" style="border-top-left-radius: 4px; border-bottom-left-radius: 4px;">Left</AfsButton>
        <AfsButton variant="secondary" :rounded="false" style="border-left: 1px solid rgba(255,255,255,0.1);">Center</AfsButton>
        <AfsButton variant="secondary" :rounded="false" style="border-left: 1px solid rgba(255,255,255,0.1); border-top-right-radius: 4px; border-bottom-right-radius: 4px;">Right</AfsButton>
      </div>
    `,
  }),
};

/**
 * Interactive click demo
 */
export const InteractiveClick: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    components: { AfsButton },
    setup() { return { args }; },
    template: '<AfsButton v-bind="args">Click Me</AfsButton>',
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Hover over button', async () => {
      const button = canvas.getByRole('button');
      await userEvent.hover(button);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Click button', async () => {
      const button = canvas.getByRole('button');
      await userEvent.click(button);
      await new Promise(r => setTimeout(r, 200));
    });

    await step('Unhover', async () => {
      const button = canvas.getByRole('button');
      await userEvent.unhover(button);
    });
  },
};

/**
 * Dialog actions context
 */
export const DialogActions: Story = {
  render: () => ({
    components: { AfsButton },
    template: `
      <div style="background: var(--background-secondary, #2c2c2e); padding: 16px; border-radius: 8px; min-width: 300px;">
        <div style="margin-bottom: 16px; color: rgba(255,255,255,0.6); font-size: 14px;">
          Are you sure you want to delete this item?
        </div>
        <div style="display: flex; gap: 12px; justify-content: flex-end;">
          <AfsButton variant="secondary">Cancel</AfsButton>
          <AfsButton variant="accent">Delete</AfsButton>
        </div>
      </div>
    `,
  }),
};

/**
 * Toolbar context
 */
export const ToolbarContext: Story = {
  render: () => ({
    components: { AfsButton },
    template: `
      <div style="background: var(--background-control, rgba(255,255,255,0.05)); padding: 8px; border-radius: 4px; display: flex; gap: 4px;">
        <AfsButton variant="transparent" size="sm" icon="eye-16-2">Show</AfsButton>
        <AfsButton variant="transparent" size="sm" icon="layers-16">Layers</AfsButton>
        <AfsButton variant="transparent" size="sm" icon="settings-16">Settings</AfsButton>
        <div style="flex: 1;"></div>
        <AfsButton variant="primary" size="sm">Export</AfsButton>
      </div>
    `,
  }),
};
