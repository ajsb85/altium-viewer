import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import AppLoader from './AppLoader.vue';

/**
 * AppLoader displays loading states with optional progress indication.
 * Used throughout the Altium Viewer for async operations.
 */
const meta: Meta<typeof AppLoader> = {
  title: 'Core/AppLoader',
  component: AppLoader,
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress percentage (0-100)',
    },
    hasError: {
      control: 'boolean',
      description: 'Whether an error occurred during loading',
    },
    text: {
      control: 'text',
      description: 'Status message to display',
    },
    overlay: {
      control: 'boolean',
      description: 'Display as an overlay over content',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Default spinner with no progress */
export const Default: Story = {
  args: {},
};

/** Indeterminate loading with status text */
export const WithText: Story = {
  args: {
    text: 'Loading design...',
  },
};

/** Determinate progress at 50% */
export const Loading: Story = {
  args: {
    progress: 50,
    text: 'Processing PCB layers...',
  },
};

/** Loading complete state */
export const Complete: Story = {
  args: {
    progress: 100,
    text: 'Design loaded successfully',
  },
};

/** Error state display */
export const Error: Story = {
  args: {
    hasError: true,
    text: 'Failed to load design file',
  },
};

/** Overlay mode for covering content */
export const Overlay: Story = {
  args: {
    overlay: true,
    progress: 30,
    text: 'Loading...',
  },
  decorators: [
    () => ({
      template: `
        <div style="position: relative; width: 300px; height: 200px; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="padding: 16px;">
            <h3 style="margin: 0 0 8px;">PCB Design</h3>
            <p style="margin: 0; color: #6b7280;">Content underneath the loader...</p>
          </div>
          <story />
        </div>
      `,
    }),
  ],
};

/** With custom slot content */
export const WithSlot: Story = {
  args: {
    text: 'Processing...',
  },
  render: (args) => ({
    components: { AppLoader },
    setup() {
      return { args };
    },
    template: `
      <AppLoader v-bind="args">
        <button style="padding: 8px 16px; cursor: pointer;">Cancel</button>
      </AppLoader>
    `,
  }),
};
