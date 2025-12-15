import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppWatermark from './AppWatermark.vue';

const meta: Meta<typeof AppWatermark> = {
  title: 'Layout/AppWatermark',
  component: AppWatermark,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="position: relative; height: 200px; background: #f3f4f6;"><story /></div>',
  })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };

export const TopLeft: Story = { args: { position: 'top-left' } };

export const BottomLeft: Story = { args: { position: 'bottom-left' } };

export const TopRight: Story = { args: { position: 'top-right' } };
