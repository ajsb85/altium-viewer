import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppBaseHeader from './AppBaseHeader.vue';

const meta: Meta<typeof AppBaseHeader> = {
  title: 'Layout/AppBaseHeader',
  component: AppBaseHeader,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 280px;"><story /></div>',
  })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { title: 'Panel Title' } };
export const WithIcon: Story = { args: { title: 'Layers', icon: 'layers-16' } };
export const NoClose: Story = { args: { title: 'Settings', showClose: false } };
