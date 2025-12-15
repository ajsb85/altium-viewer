import type { Meta, StoryObj } from '@storybook/vue3-vite';
import PreviewPanel from './PreviewPanel.vue';

const meta: Meta<typeof PreviewPanel> = {
  title: 'Plugins/PreviewPanel',
  component: PreviewPanel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="width: 300px; height: 400px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** With item data */
export const Default: Story = {
  args: {
    item: {
      name: 'U1 - ATmega328P',
      description: 'Microcontroller, 8-bit AVR',
      properties: {
        Package: 'TQFP-32',
        Value: 'ATmega328P',
        Footprint: 'TQFP32',
      },
    },
  },
};

/** Loading state */
export const Loading: Story = {
  args: {
    loading: true,
  },
};

/** Empty state */
export const Empty: Story = {
  args: {},
};
