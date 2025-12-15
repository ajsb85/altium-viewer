import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppObjectsList from './AppObjectsList.vue';

const meta: Meta<typeof AppObjectsList> = {
  title: 'Plugins/AppObjectsList',
  component: AppObjectsList,
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
      { id: 'r1', name: 'R1', icon: 'resistor-16', value: '10kΩ' },
      { id: 'r2', name: 'R2', icon: 'resistor-16', value: '4.7kΩ', isSelected: true },
      { id: 'c1', name: 'C1', icon: 'capacitor-16', value: '100nF' },
      { id: 'u1', name: 'U1', icon: 'ic-16', value: 'ATmega328' },
    ],
  },
};

export const Empty: Story = { args: { items: [] } };

export const NetsWithHighlight: Story = {
  args: {
    items: [
      { id: 'gnd', name: 'GND', value: '12 pads' },
      { id: 'vcc', name: 'VCC', value: '8 pads', isHighlighted: true },
      { id: 'net1', name: 'NET1', value: '4 pads' },
    ],
  },
};
