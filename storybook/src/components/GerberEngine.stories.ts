import type { Meta, StoryObj } from '@storybook/vue3-vite';
import GerberEngine from './GerberEngine.vue';

const meta: Meta<typeof GerberEngine> = {
  title: 'ViewEngine/GerberEngine',
  component: GerberEngine,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [(story) => ({ components: { story }, template: '<div style="height: 400px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    layers: [
      { id: 'copper-top', name: 'Copper Top', color: '#cc0000', visible: true },
      { id: 'soldermask', name: 'Soldermask', color: '#00aa00', visible: true, x: 8, y: 8, width: 84, height: 64, opacity: 0.6 },
    ],
  },
};

export const MultipleLayers: Story = {
  args: {
    layers: [
      { id: 'outline', name: 'Board Outline', color: '#ffff00', visible: true, x: 5, y: 5, width: 90, height: 70, opacity: 0.3 },
      { id: 'copper-top', name: 'Top Copper', color: '#ff0000', visible: true, x: 15, y: 15, width: 70, height: 50 },
      { id: 'copper-bot', name: 'Bottom Copper', color: '#0000ff', visible: true, x: 20, y: 20, width: 60, height: 40, opacity: 0.7 },
    ],
  },
};
