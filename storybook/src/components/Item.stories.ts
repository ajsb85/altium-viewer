import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Item from './Item.vue';

const meta: Meta<typeof Item> = {
  title: 'Plugins/Item',
  component: Item,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({ components: { story }, template: '<div style="width: 200px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: '[1] Main Sheet', imageSrc: 'https://placehold.co/200x136/3a3a3c/ffffff?text=SCH' },
};

export const WithSubtitle: Story = {
  args: { title: 'Power Supply', subtitle: 'Rev 2.1', imageSrc: 'https://placehold.co/200x136/3a3a3c/ffffff?text=SCH' },
};

export const WithIcon: Story = {
  args: { title: 'Main PCB', subtitle: '4 layers', icon: 'pcb-16', imageSrc: 'https://placehold.co/200x136/3a3a3c/ffffff?text=PCB' },
};
