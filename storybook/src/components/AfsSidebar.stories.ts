import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AfsSidebar from './AfsSidebar.vue';

/**
 * AfsSidebar - Base resizable sidebar container component
 * 
 * Provides a resizable panel with configurable min/max width constraints.
 * Foundation for AppSidebar and other panel components.
 * 
 * @see ViewerComponents.js createAfsSidebar (L110-201)
 * @see scss/components/afs-sidebar.scss
 */
const meta: Meta<typeof AfsSidebar> = {
  title: 'Layout/AfsSidebar',
  component: AfsSidebar,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Side of the viewport',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size preset (sm: 280px, md: 320px, lg: 360px)',
    },
    resizable: {
      control: 'boolean',
      description: 'Enable resize handle',
    },
    minPanelWidth: {
      control: 'number',
      description: 'Minimum width in pixels',
    },
    maxPanelWidth: {
      control: 'number',
      description: 'Maximum width in pixels',
    },
    initialWidth: {
      control: 'number',
      description: 'Initial width in pixels',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Base resizable sidebar container. Drag the edge to resize when resizable is enabled.',
      },
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="display: flex; height: 400px; background: #f0f0f0;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Left-side sidebar (default) */
export const Left: Story = {
  args: {
    side: 'left',
    size: 'md',
    resizable: true,
  },
  render: (args) => ({
    components: { AfsSidebar },
    setup() {
      return { args };
    },
    template: `
      <AfsSidebar v-bind="args">
        <div style="padding: 16px;">
          <h3>Sidebar Content</h3>
          <p>Drag the right edge to resize.</p>
        </div>
      </AfsSidebar>
    `,
  }),
};

/** Right-side sidebar */
export const Right: Story = {
  args: {
    side: 'right',
    size: 'md',
    resizable: true,
  },
  render: (args) => ({
    components: { AfsSidebar },
    setup() {
      return { args };
    },
    template: `
      <div style="flex: 1;"></div>
      <AfsSidebar v-bind="args">
        <div style="padding: 16px;">
          <h3>Right Sidebar</h3>
          <p>Positioned on the right side.</p>
        </div>
      </AfsSidebar>
    `,
  }),
};

/** Small size preset (280px) */
export const SmallSize: Story = {
  args: {
    side: 'left',
    size: 'sm',
    resizable: false,
  },
  render: (args) => ({
    components: { AfsSidebar },
    setup() {
      return { args };
    },
    template: `
      <AfsSidebar v-bind="args">
        <div style="padding: 16px;">
          <h3>Small Sidebar</h3>
          <p>280px width.</p>
        </div>
      </AfsSidebar>
    `,
  }),
};

/** Large size preset (360px) */
export const LargeSize: Story = {
  args: {
    side: 'left',
    size: 'lg',
    resizable: false,
  },
  render: (args) => ({
    components: { AfsSidebar },
    setup() {
      return { args };
    },
    template: `
      <AfsSidebar v-bind="args">
        <div style="padding: 16px;">
          <h3>Large Sidebar</h3>
          <p>360px width.</p>
        </div>
      </AfsSidebar>
    `,
  }),
};
