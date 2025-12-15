import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import TreeItem from './TreeItem.vue';

const meta: Meta<typeof TreeItem> = {
  title: 'Core/TreeItem',
  component: TreeItem,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({ components: { story }, template: '<div style="width: 280px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

const treeData = {
  id: 'root',
  label: 'Project',
  icon: 'folder-16',
  expanded: true,
  children: [
    {
      id: 'sch',
      label: 'Schematics',
      icon: 'folder-16',
      children: [
        { id: 'sch1', label: 'Main.SchDoc', icon: 'schematic-16' },
        { id: 'sch2', label: 'Power.SchDoc', icon: 'schematic-16' },
      ],
    },
    {
      id: 'pcb',
      label: 'PCBs',
      icon: 'folder-16',
      children: [
        { id: 'pcb1', label: 'Board.PcbDoc', icon: 'pcb-16', badge: '4L' },
      ],
    },
  ],
};

export const Default: Story = {
  render: () => ({
    components: { TreeItem },
    setup() {
      const selectedId = ref<string | null>(null);
      return { treeData, selectedId, handleSelect: (id: string) => { selectedId.value = id; } };
    },
    template: '<TreeItem v-bind="treeData" :selected-id="selectedId" @select="handleSelect" />',
  }),
};
