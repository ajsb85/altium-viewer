import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppLoader from './AppLoader.vue';

/**
 * AppLoader - Full-screen loading overlay with spinner
 * 
 * Shows animated progress spinner with optional icon and status text.
 * Used during file loading, processing, and other async operations.
 * 
 * @see ViewerComponents.js createAppLoader (L401-553)
 * @see scss/components/app-loader.scss
 */
const meta: Meta<typeof AppLoader> = {
  title: 'Feedback/AppLoader',
  component: AppLoader,
  tags: ['autodocs'],
  argTypes: {
    hasError: {
      control: 'boolean',
      description: 'Show error state (hides spinner, shows error icon)',
    },
    hasIcon: {
      control: 'boolean',
      description: 'Show icon inside the loader figure',
    },
    backgroundAlpha: {
      control: 'boolean',
      description: 'Use semi-transparent background overlay',
    },
    icon: {
      control: 'text',
      description: 'Icon name (default: file-upload-32)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the loader figure',
    },
    primary: {
      control: 'boolean',
      description: 'Primary (blue) or secondary (pink) spinner color',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Full-screen loading overlay with animated spinner and optional status text.',
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

/** Default loading spinner */
export const Default: Story = {
  args: {
    hasError: false,
    hasIcon: false,
    size: 'large',
    primary: true,
  },
  render: (args) => ({
    components: { AppLoader },
    setup() {
      return { args };
    },
    template: `
      <AppLoader v-bind="args">
        <p>Loading design...</p>
      </AppLoader>
    `,
  }),
};

/** Loading with icon displayed */
export const WithIcon: Story = {
  args: {
    hasError: false,
    hasIcon: true,
    icon: 'file-upload-32',
    size: 'large',
    primary: true,
  },
  render: (args) => ({
    components: { AppLoader },
    setup() {
      return { args };
    },
    template: `
      <AppLoader v-bind="args">
        <p>Uploading file...</p>
        <template #meta>
          <span>15% complete</span>
        </template>
      </AppLoader>
    `,
  }),
};

/** Error state */
export const Error: Story = {
  args: {
    hasError: true,
    hasIcon: true,
    icon: 'error-64',
    size: 'large',
    primary: true,
  },
  render: (args) => ({
    components: { AppLoader },
    setup() {
      return { args };
    },
    template: `
      <AppLoader v-bind="args">
        <p>Failed to load design</p>
        <template #meta>
          <span>Please try again</span>
        </template>
      </AppLoader>
    `,
  }),
};

/** Secondary (pink) spinner color */
export const Secondary: Story = {
  args: {
    hasError: false,
    hasIcon: false,
    size: 'large',
    primary: false,
  },
  render: (args) => ({
    components: { AppLoader },
    setup() {
      return { args };
    },
    template: `
      <AppLoader v-bind="args">
        <p>Processing...</p>
      </AppLoader>
    `,
  }),
};

/** Small size variant */
export const SmallSize: Story = {
  args: {
    hasError: false,
    hasIcon: false,
    size: 'small',
    primary: true,
  },
  render: (args) => ({
    components: { AppLoader },
    setup() {
      return { args };
    },
    template: `
      <AppLoader v-bind="args">
        <p>Loading...</p>
      </AppLoader>
    `,
  }),
};
