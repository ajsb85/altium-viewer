import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppLayersContent from './AppLayersContent.vue';

const meta: Meta<typeof AppLayersContent> = {
  title: 'Plugins/AppLayersContent',
  component: AppLayersContent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 220px; background: var(--afs-panel); border-radius: 4px;"><story /></div>',
  })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Signal Layers',
    layers: [
      { id: 'top', name: 'Top Layer', color: '#ff0000', visible: true },
      { id: 'gnd', name: 'GND', color: '#00ff00', visible: true },
      { id: 'pwr', name: 'PWR', color: '#ffff00', visible: false },
      { id: 'bottom', name: 'Bottom Layer', color: '#0000ff', visible: true },
    ],
  },
};

export const AllHidden: Story = {
  args: {
    title: 'Mechanical',
    layers: [
      { id: 'm1', name: 'Mechanical 1', color: '#888888', visible: false },
      { id: 'm2', name: 'Mechanical 2', color: '#999999', visible: false },
    ],
  },
};
