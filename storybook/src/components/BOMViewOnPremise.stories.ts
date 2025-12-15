import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BOMViewOnPremise from './BOMViewOnPremise.vue';

const meta: Meta<typeof BOMViewOnPremise> = {
  title: 'Plugins/BOMViewOnPremise',
  component: BOMViewOnPremise,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [(story) => ({ components: { story }, template: '<div style="height: 400px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: [
      { id: 'designator', label: 'Designator' },
      { id: 'description', label: 'Description' },
      { id: 'footprint', label: 'Footprint' },
      { id: 'quantity', label: 'Qty' },
    ],
    items: [
      { designator: 'R1, R2', description: '10k Resistor', footprint: '0402', quantity: 2 },
      { designator: 'C1', description: '100nF Capacitor', footprint: '0402', quantity: 1 },
      { designator: 'U1', description: 'ATmega328P', footprint: 'QFP-32', quantity: 1, isSelected: true },
      { designator: 'J1', description: 'USB-C Connector', footprint: 'USB-C-16P', quantity: 1 },
    ],
  },
};
