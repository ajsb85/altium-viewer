import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppBoardControl from './AppBoardControl.vue';

const meta: Meta<typeof AppBoardControl> = {
  title: 'Plugins/AppBoardControl',
  component: AppBoardControl,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TopSide: Story = { args: { viewMode: 'top', is3D: false } };
export const BottomSide: Story = { args: { viewMode: 'bottom', is3D: false } };
export const View3D: Story = { args: { viewMode: 'top', is3D: true } };
