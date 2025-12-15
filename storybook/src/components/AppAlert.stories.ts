import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppAlert from './AppAlert.vue';

/**
 * AppAlert - Full-screen alert/notification overlay component.
 * 
 * Displays centered error or status messages with an icon.
 * Used for critical notifications that require user attention.
 * 
 * @see ViewerComponents.js createAppAlert (L337-399)
 * @see scss/components/app-alert.scss
 */
const meta: Meta<typeof AppAlert> = {
  title: 'Feedback/AppAlert',
  component: AppAlert,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Icon name from AfsIcon library (e.g., error-64, file-upload-32)',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Full-screen overlay alert for critical notifications. Uses AfsIcon for iconography.',
      },
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="position: relative; width: 100%; height: 400px; background: #f0f0f0;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Default error alert with icon */
export const Default: Story = {
  args: {
    icon: 'error-64',
  },
  render: (args) => ({
    components: { AppAlert },
    setup() {
      return { args };
    },
    template: `
      <AppAlert v-bind="args">
        <p>An error occurred while loading the design.</p>
      </AppAlert>
    `,
  }),
};

/** Alert with custom text content */
export const WithText: Story = {
  args: {
    icon: 'error-64',
  },
  render: (args) => ({
    components: { AppAlert },
    setup() {
      return { args };
    },
    template: `
      <AppAlert v-bind="args">
        <p><strong>Failed to load PCB design</strong></p>
        <p>Please check your network connection and try again.</p>
      </AppAlert>
    `,
  }),
};

/** Alert with meta information slot */
export const WithMeta: Story = {
  args: {
    icon: 'file-upload-32',
  },
  render: (args) => ({
    components: { AppAlert },
    setup() {
      return { args };
    },
    template: `
      <AppAlert v-bind="args">
        <p>Processing your design file...</p>
        <template #meta>
          <span>Step 2 of 5 • Analyzing layers</span>
        </template>
      </AppAlert>
    `,
  }),
};

/** Alert with both text and meta slots */
export const FullContent: Story = {
  args: {
    icon: 'error-64',
  },
  render: (args) => ({
    components: { AppAlert },
    setup() {
      return { args };
    },
    template: `
      <AppAlert v-bind="args">
        <p><strong>Connection Lost</strong></p>
        <p>Unable to reach the Altium 365 server.</p>
        <template #meta>
          <span>Error code: NET_ERR_CONNECTION_REFUSED</span>
        </template>
      </AppAlert>
    `,
  }),
};
