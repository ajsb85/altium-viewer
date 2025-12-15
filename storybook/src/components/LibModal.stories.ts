import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LibModal from './LibModal.vue';

const meta: Meta<typeof LibModal> = {
  title: 'Layout/LibModal',
  component: LibModal,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="position: relative; height: 400px; background: var(--afs-background);"><story /></div>',
  })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Panel Title' },
  render: (args) => ({
    components: { LibModal },
    setup() { return { args }; },
    template: '<LibModal v-bind="args"><p style="padding: 16px; color: var(--afs-text-icon-secondary);">Panel content goes here</p></LibModal>',
  }),
};

export const Left: Story = {
  args: { title: 'Layers', position: 'left' },
  render: (args) => ({
    components: { LibModal },
    setup() { return { args }; },
    template: '<LibModal v-bind="args"><p style="padding: 16px; color: var(--afs-text-icon-secondary);">Left panel content</p></LibModal>',
  }),
};

export const NoHeader: Story = {
  args: { showHeader: false },
  render: (args) => ({
    components: { LibModal },
    setup() { return { args }; },
    template: '<LibModal v-bind="args"><p style="padding: 16px; color: var(--afs-text-icon-secondary);">Panel without header</p></LibModal>',
  }),
};
