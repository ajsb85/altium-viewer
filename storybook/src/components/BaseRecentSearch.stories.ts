import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseRecentSearch from './BaseRecentSearch.vue';

const meta: Meta<typeof BaseRecentSearch> = {
  title: 'Search/BaseRecentSearch',
  component: BaseRecentSearch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({ components: { story }, template: '<div style="width: 280px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { searches: ['ATmega328', 'capacitor', 'VCC'] },
};
