import type { Meta, StoryObj } from '@storybook/vue3-vite';
import SCHViewModule from './SCHViewModule.vue';

const meta: Meta<typeof SCHViewModule> = {
  title: 'ViewEngine/SCHViewModule',
  component: SCHViewModule,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [(story) => ({ components: { story }, template: '<div style="height: 400px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { sheetName: 'Main.SchDoc' } };
export const Zoomed: Story = { args: { sheetName: 'Power', zoom: 1.5 } };
export const NoGrid: Story = { args: { sheetName: 'Sheet1', showGrid: false } };
