import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import BOMView from './BOMView.vue';

const meta: Meta<typeof BOMView> = {
  title: 'Plugins/BOMView',
  component: BOMView,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="height: 400px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  { id: '1', designator: 'U1', description: 'ATmega328P Microcontroller', quantity: 1, value: 'ATmega328P' },
  { id: '2', designator: 'R1-R4', description: '10K Resistor 0603', quantity: 4, value: '10K' },
  { id: '3', designator: 'C1-C3', description: '100nF Capacitor 0603', quantity: 3, value: '100nF' },
  { id: '4', designator: 'LED1', description: 'Red LED 0805', quantity: 1, value: 'Red' },
  { id: '5', designator: 'J1', description: 'USB Type-C Connector', quantity: 1, value: 'USB-C' },
  { id: '6', designator: 'Y1', description: '16MHz Crystal', quantity: 1, value: '16MHz' },
];

/** Default with sample data */
export const Default: Story = {
  render: () => ({
    components: { BOMView },
    setup() {
      const selectedId = ref<string | null>(null);
      const handleSelect = (item: any) => { selectedId.value = item.id; };
      return { items: sampleItems, selectedId, handleSelect };
    },
    template: `
      <BOMView 
        :items="items"
        :selected-id="selectedId"
        @select="handleSelect"
      />
    `,
  }),
};

/** Empty state */
export const Empty: Story = {
  args: {
    items: [],
  },
};
