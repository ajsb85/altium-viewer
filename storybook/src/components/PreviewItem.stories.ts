import type { Meta, StoryObj } from '@storybook/vue3-vite';
import PreviewItem from './PreviewItem.vue';

const meta: Meta<typeof PreviewItem> = {
  title: 'Plugins/PreviewItem',
  component: PreviewItem,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({ components: { story }, template: '<div style="width: 200px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: '[1] block_diagram', imageSrc: 'https://placehold.co/200x136/3a3a3c/ffffff?text=SCH' },
};

export const Selected: Story = {
  args: { title: '[3] pdb_conn', imageSrc: 'https://placehold.co/200x136/3a3a3c/ffffff?text=SCH', isSelected: true },
};

export const WithIcon: Story = {
  args: { title: 'Main PCB', imageSrc: 'https://placehold.co/200x136/3a3a3c/ffffff?text=PCB', icon: 'pcb-16' },
};
