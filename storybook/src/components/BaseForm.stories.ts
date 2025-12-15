import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseForm from './BaseForm.vue';

const meta: Meta<typeof BaseForm> = {
  title: 'Search/BaseForm',
  component: BaseForm,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({ components: { story }, template: '<div style="width: 280px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
export const Custom: Story = { args: { placeholder: 'Find components...' } };
