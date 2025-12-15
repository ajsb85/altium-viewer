import type { Meta, StoryObj } from '@storybook/vue3-vite';
import FullScreen from './FullScreen.vue';

const meta: Meta<typeof FullScreen> = {
  title: 'Controls/FullScreen',
  component: FullScreen,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Default fullscreen button */
export const Default: Story = {
  args: {},
};
