import type { Meta, StoryObj } from '@storybook/vue3-vite';
import CompareLayers from './CompareLayers.vue';

const meta: Meta<typeof CompareLayers> = {
  title: 'Compare/CompareLayers',
  component: CompareLayers,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="width: 280px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    layers: [
      { id: '1', name: 'Top Copper', color: '#dc2626', hasDifference: true, diffCount: 5 },
      { id: '2', name: 'Bottom Copper', color: '#2563eb', hasDifference: false },
      { id: '3', name: 'Top Solder', color: '#16a34a', hasDifference: true, diffCount: 2 },
      { id: '4', name: 'Outline', color: '#6366f1', hasDifference: false },
    ],
  },
};
