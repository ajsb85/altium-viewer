import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Search from './Search.vue';

const meta: Meta<typeof Search> = {
  title: 'Search/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 240px; background: var(--afs-panel); border-radius: 4px;"><story /></div>',
  })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };

export const NoFilters: Story = { args: { showFilters: false } };

export const CustomPlaceholder: Story = { args: { placeholder: 'Find components...' } };
