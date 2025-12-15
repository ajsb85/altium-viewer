import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Fabrication from './Fabrication.vue';

const meta: Meta<typeof Fabrication> = {
  title: 'ViewEngine/Fabrication',
  component: Fabrication,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({ components: { story }, template: '<div style="width: 300px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sections: [
      {
        id: 'board',
        title: 'Board Specifications',
        items: [
          { label: 'Width', value: '100.00 mm' },
          { label: 'Height', value: '80.00 mm' },
          { label: 'Layers', value: '4' },
          { label: 'Thickness', value: '1.6 mm' },
        ],
      },
      {
        id: 'copper',
        title: 'Copper',
        items: [
          { label: 'Weight', value: '1 oz' },
          { label: 'Min Track', value: '0.15 mm' },
          { label: 'Min Space', value: '0.15 mm' },
        ],
      },
    ],
  },
};
