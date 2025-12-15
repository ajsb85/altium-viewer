import type { Meta, StoryObj } from '@storybook/vue3-vite';
import SchCompare from './SchCompare.vue';

const meta: Meta<typeof SchCompare> = {
  title: 'Compare/SchCompare',
  component: SchCompare,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [(story) => ({ components: { story }, template: '<div style="height: 400px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { leftLabel: 'Rev 1.0', rightLabel: 'Rev 1.1', changesCount: 5 } };
export const NoChanges: Story = { args: { changesCount: 0 } };
