import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ComparePanel from './ComparePanel.vue';

const meta: Meta<typeof ComparePanel> = {
  title: 'Compare/ComparePanel',
  component: ComparePanel,
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

export const Default: Story = {
  args: {
    differences: [
      { id: '1', name: 'R1 - Resistor', type: 'added' },
      { id: '2', name: 'C3 - Capacitor', type: 'removed' },
      { id: '3', name: 'U1 - MCU', type: 'changed' },
    ],
  },
};
