import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppMeasurementHistorySection from './AppMeasurementHistorySection.vue';

const meta: Meta<typeof AppMeasurementHistorySection> = {
  title: 'Plugins/AppMeasurementHistorySection',
  component: AppMeasurementHistorySection,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 240px; background: var(--afs-panel); border-radius: 4px;"><story /></div>',
  })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { id: '1', label: 'Point to Point', value: '2.540 mm' },
      { id: '2', label: 'Distance', value: '15.24 mm', isSelected: true },
      { id: '3', label: 'Pad to Pad', value: '1.27 mm' },
    ],
  },
};

export const Empty: Story = { args: { items: [] } };
