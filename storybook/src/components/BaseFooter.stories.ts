import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseFooter from './BaseFooter.vue';

const meta: Meta<typeof BaseFooter> = {
  title: 'Search/BaseFooter',
  component: BaseFooter,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 240px; background: var(--afs-panel);"><story /></div>',
  })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { count: 12 } };
export const NoClear: Story = { args: { count: 5, showClear: false } };
export const NoCount: Story = { args: { showCount: false } };
