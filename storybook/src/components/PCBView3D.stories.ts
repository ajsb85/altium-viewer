import type { Meta, StoryObj } from '@storybook/vue3-vite';
import PCBView3D from './PCBView3D.vue';

const meta: Meta<typeof PCBView3D> = {
  title: 'ViewEngine/PCBView3D',
  component: PCBView3D,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [(story) => ({ components: { story }, template: '<div style="height: 400px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
export const LargeBoard: Story = { args: { boardWidth: 150, boardHeight: 100 } };
