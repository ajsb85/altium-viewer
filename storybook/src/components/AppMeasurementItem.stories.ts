import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppMeasurementItem from './AppMeasurementItem.vue';

const meta: Meta<typeof AppMeasurementItem> = {
  title: 'Plugins/AppMeasurementItem',
  component: AppMeasurementItem,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({ components: { story }, template: '<div style="width: 280px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'M1', x: 12.345, y: 6.789, distance: 14.125 } };
export const Active: Story = { args: { label: 'M2', x: 5.0, y: 10.0, distance: 11.18, isActive: true } };
