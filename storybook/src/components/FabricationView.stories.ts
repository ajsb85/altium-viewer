import type { Meta, StoryObj } from '@storybook/vue3-vite';
import FabricationView from './FabricationView.vue';

const meta: Meta<typeof FabricationView> = {
  title: 'View Engines/FabricationView',
  component: FabricationView,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="width: 300px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sections: [
      {
        id: 'board',
        title: 'Board',
        properties: [
          { key: 'layers', label: 'Layers', value: 4 },
          { key: 'thickness', label: 'Thickness', value: '1.6mm' },
          { key: 'material', label: 'Material', value: 'FR-4' },
        ],
      },
      {
        id: 'copper',
        title: 'Copper',
        properties: [
          { key: 'weight', label: 'Weight', value: '1oz' },
          { key: 'minTrace', label: 'Min Trace', value: '0.15mm' },
          { key: 'minSpace', label: 'Min Space', value: '0.15mm' },
        ],
      },
    ],
  },
};
