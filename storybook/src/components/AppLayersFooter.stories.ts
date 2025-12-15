import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppLayersFooter from './AppLayersFooter.vue';

const meta: Meta<typeof AppLayersFooter> = {
  title: 'Plugins/AppLayersFooter',
  component: AppLayersFooter,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({ components: { story }, template: '<div style="width: 280px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { visibleCount: 6, totalCount: 8 } };
export const AllVisible: Story = { args: { visibleCount: 8, totalCount: 8, showAll: true } };
