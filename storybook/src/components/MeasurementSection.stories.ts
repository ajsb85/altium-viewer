import type { Meta, StoryObj } from '@storybook/vue3-vite';
import MeasurementSection from './MeasurementSection.vue';

const meta: Meta<typeof MeasurementSection> = {
  title: 'Plugins/MeasurementSection',
  component: MeasurementSection,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 220px;"><story /></div>',
  })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Distance',
    items: [
      { label: 'X', value: '2.540 mm' },
      { label: 'Y', value: '1.270 mm' },
      { label: 'Total', value: '2.840 mm' },
    ],
  },
};

export const BoardDimensions: Story = {
  args: {
    title: 'Board',
    items: [
      { label: 'Width', value: '100.00 mm' },
      { label: 'Height', value: '80.00 mm' },
      { label: 'Layers', value: '4' },
    ],
  },
};
