import type { Meta, StoryObj } from '@storybook/vue3-vite';
import SCHView from './SCHView.vue';

const meta: Meta<typeof SCHView> = {
  title: 'View Engines/SCHView',
  component: SCHView,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
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

export const WithSheets: Story = {
  args: {
    sheets: [
      { id: 'main', name: 'Main' },
      { id: 'power', name: 'Power Supply' },
      { id: 'io', name: 'I/O Interface' },
    ],
    activeSheet: 'main',
  },
};

export const Loading: Story = { args: { loading: true } };
