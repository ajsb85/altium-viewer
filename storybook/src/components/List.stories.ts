import type { Meta, StoryObj } from '@storybook/vue3-vite';
import List from './List.vue';

const meta: Meta<typeof List> = {
  title: 'Core/List',
  component: List,
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
    items: [
      { cells: [{ type: 'color', value: '#ff0000' }, { value: 'Top Layer' }] },
      { cells: [{ type: 'color', value: '#0000ff' }, { value: 'Bottom Layer' }] },
      { cells: [{ type: 'color', value: '#00ff00' }, { value: 'Inner 1' }], isSelected: true },
      { cells: [{ type: 'color', value: '#ffff00' }, { value: 'Inner 2' }] },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { cells: [{ type: 'icon', value: 'schematic-16' }, { value: 'Main.SchDoc' }] },
      { cells: [{ type: 'icon', value: 'pcb-16' }, { value: 'Board.PcbDoc' }] },
    ],
  },
};
