import type { Meta, StoryObj } from '@storybook/vue3-vite';
import GerberCompareView from './GerberCompareView.vue';

const meta: Meta<typeof GerberCompareView> = {
  title: 'ViewEngine/GerberCompareView',
  component: GerberCompareView,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [(story) => ({ components: { story }, template: '<div style="height: 400px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { leftLabel: 'Rev 1.0', rightLabel: 'Rev 1.1', differencesCount: 3 } };
export const NoDifferences: Story = { args: { differencesCount: 0 } };
