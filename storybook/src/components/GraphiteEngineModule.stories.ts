import type { Meta, StoryObj } from '@storybook/vue3-vite';
import GraphiteEngineModule from './GraphiteEngineModule.vue';

const meta: Meta<typeof GraphiteEngineModule> = {
  title: 'ViewEngine/GraphiteEngineModule',
  component: GraphiteEngineModule,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [(story) => ({ components: { story }, template: '<div style="height: 400px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Ready: Story = { args: { isReady: true } };
export const Loading: Story = { args: { isReady: false } };
