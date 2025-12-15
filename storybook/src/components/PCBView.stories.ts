import type { Meta, StoryObj } from '@storybook/vue3-vite';
import PCBView from './PCBView.vue';

const meta: Meta<typeof PCBView> = {
  title: 'View Engines/PCBView',
  component: PCBView,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', backgrounds: { default: 'dark' } },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="height: 400px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };

export const Loading: Story = { args: { loading: true } };

export const Error: Story = { args: { error: 'Failed to load PCB data' } };
