import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AfsSidebar from './AfsSidebar.vue';

/**
 * AfsSidebar is the base sidebar component used throughout the Altium Viewer.
 * It provides a resizable panel with header and footer slots.
 */
const meta: Meta<typeof AfsSidebar> = {
  title: 'Layout/AfsSidebar',
  component: AfsSidebar,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'range', min: 150, max: 500, step: 10 },
      description: 'Initial sidebar width in pixels',
    },
    minWidth: {
      control: { type: 'number' },
      description: 'Minimum width when resizing',
    },
    maxWidth: {
      control: { type: 'number' },
      description: 'Maximum width when resizing',
    },
    resizable: {
      control: 'boolean',
      description: 'Enable drag-to-resize handle',
    },
    position: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Sidebar position',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    () => ({
      template: '<div style="height: 400px; display: flex;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Basic sidebar with default configuration */
export const Default: Story = {
  args: {
    width: 280,
    resizable: true,
    position: 'left',
  },
  render: (args) => ({
    components: { AfsSidebar },
    setup() {
      return { args };
    },
    template: `
      <AfsSidebar v-bind="args">
        <p>Sidebar content goes here</p>
        <p>Try dragging the right edge to resize!</p>
      </AfsSidebar>
    `,
  }),
};

/** Sidebar with header and footer slots */
export const WithSlots: Story = {
  args: {
    width: 300,
    resizable: true,
  },
  render: (args) => ({
    components: { AfsSidebar },
    setup() {
      return { args };
    },
    template: `
      <AfsSidebar v-bind="args">
        <template #header>
          <h3 style="margin: 0;">Layers Panel</h3>
        </template>
        
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">Copper Top</li>
          <li style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">Copper Bottom</li>
          <li style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">Silkscreen</li>
          <li style="padding: 8px 0;">Solder Mask</li>
        </ul>

        <template #footer>
          <button style="width: 100%; padding: 8px;">Apply Changes</button>
        </template>
      </AfsSidebar>
    `,
  }),
};

/** Right-positioned sidebar */
export const RightPosition: Story = {
  args: {
    width: 280,
    resizable: true,
    position: 'right',
  },
  decorators: [
    () => ({
      template: '<div style="height: 400px; display: flex; justify-content: flex-end;"><story /></div>',
    }),
  ],
  render: (args) => ({
    components: { AfsSidebar },
    setup() {
      return { args };
    },
    template: `
      <AfsSidebar v-bind="args">
        <template #header>Properties</template>
        <p>Component properties panel</p>
      </AfsSidebar>
    `,
  }),
};

/** Non-resizable fixed-width sidebar */
export const FixedWidth: Story = {
  args: {
    width: 250,
    resizable: false,
  },
  render: (args) => ({
    components: { AfsSidebar },
    setup() {
      return { args };
    },
    template: `
      <AfsSidebar v-bind="args">
        <p>This sidebar cannot be resized.</p>
      </AfsSidebar>
    `,
  }),
};
