import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppObjectsButton from './AppObjectsButton.vue';

const meta: Meta<typeof AppObjectsButton> = {
  title: 'Plugins/AppObjectsButton',
  component: AppObjectsButton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({ components: { story }, template: '<div style="width: 220px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'Components', count: 45 } };
export const Active: Story = { args: { label: 'Nets', count: 12, isActive: true } };
export const NoCount: Story = { args: { label: 'Pads' } };
