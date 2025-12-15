import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import TreeItem from './TreeItem.vue';

/**
 * TreeItem - Recursive tree navigation component
 * 
 * Used for file/folder navigation in the Altium Viewer sidebar.
 * Supports recursive children, icons, badges, and selection state.
 */
const meta: Meta<typeof TreeItem> = {
  title: 'Navigation/TreeItem',
  component: TreeItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true, sort: 'requiredFirst' },
  },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 280px; background: var(--afs-panel); padding: 8px; border-radius: 8px;"><story /></div>',
  })],
  argTypes: {
    id: {
      description: 'Unique identifier for the tree item',
      control: 'text',
      table: { category: 'Identity' },
    },
    label: {
      description: 'Display label for the item',
      control: 'text',
      table: { category: 'Content' },
    },
    icon: {
      description: 'Icon name (from AfsIcon)',
      control: 'select',
      options: ['', 'folder-16', 'file-16', 'schematic-16', 'pcb-16'],
      table: { category: 'Content' },
    },
    badge: {
      description: 'Optional badge text (e.g., layer count)',
      control: 'text',
      table: { category: 'Content' },
    },
    expanded: {
      description: 'Whether the item is expanded (if it has children)',
      control: 'boolean',
      table: { category: 'State' },
    },
    selectedId: {
      description: 'ID of currently selected item',
      control: 'text',
      table: { category: 'State' },
    },
    depth: {
      description: 'Nesting depth (set automatically by recursion)',
      control: 'number',
      table: { category: 'Layout' },
    },
    children: {
      description: 'Nested tree items',
      control: 'object',
      table: { category: 'Content' },
    },
  },
  args: {
    id: 'root',
    label: 'Project Root',
    icon: 'folder-16',
    expanded: true,
    depth: 0,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const projectTree = {
  id: 'root',
  label: 'PixHawk2-FMUv5.PrjPcb',
  icon: 'folder-16',
  expanded: true,
  children: [
    {
      id: 'sch',
      label: 'Schematics',
      icon: 'folder-16',
      children: [
        { id: 'sch1', label: '1_block_diagram.SchDoc', icon: 'schematic-16' },
        { id: 'sch2', label: '2_reference.SchDoc', icon: 'schematic-16' },
        { id: 'sch3', label: '3_pdb_conn.SchDoc', icon: 'schematic-16' },
      ],
    },
    {
      id: 'pcb',
      label: 'PCB Documents',
      icon: 'folder-16',
      children: [
        { id: 'pcb1', label: 'PixHawk2-FMUv5.PcbDoc', icon: 'pcb-16', badge: '6L' },
      ],
    },
    {
      id: 'outputs',
      label: 'Output Files',
      icon: 'folder-16',
      expanded: false,
      children: [
        { id: 'gerber', label: 'Gerber', icon: 'folder-16' },
        { id: 'bom', label: 'BOM.xlsx', icon: 'file-16' },
      ],
    },
  ],
};

/**
 * Complete project tree with nested folders
 */
export const Default: Story = {
  render: () => ({
    components: { TreeItem },
    setup() {
      const selectedId = ref<string | null>('sch1');
      return {
        projectTree,
        selectedId,
        handleSelect: (id: string) => { selectedId.value = id; },
      };
    },
    template: '<TreeItem v-bind="projectTree" :selected-id="selectedId" @select="handleSelect" />',
  }),
  play: async ({ canvasElement, step }) => {
    await step('Wait for render', async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
    });
    
    await step('Click through items', async () => {
      const rows = canvasElement.querySelectorAll('.tree-item__row');
      for (let i = 0; i < Math.min(rows.length, 5); i++) {
        (rows[i] as HTMLElement).click();
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    });
    
    await step('Toggle folder expansion', async () => {
      const toggles = canvasElement.querySelectorAll('.tree-item__toggle');
      for (const toggle of toggles) {
        (toggle as HTMLElement).click();
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    });
  },
};

/**
 * Single leaf item without children
 */
export const LeafItem: Story = {
  args: {
    id: 'file1',
    label: 'Main.SchDoc',
    icon: 'schematic-16',
    expanded: false,
    children: [],
  },
};

/**
 * Item with badge
 */
export const WithBadge: Story = {
  args: {
    id: 'pcb1',
    label: 'Board.PcbDoc',
    icon: 'pcb-16',
    badge: '4L',
  },
};

/**
 * Deeply nested structure
 */
export const DeepNesting: Story = {
  render: () => ({
    components: { TreeItem },
    setup() {
      const selectedId = ref<string | null>(null);
      const deepTree = {
        id: '1', label: 'Level 1', icon: 'folder-16', expanded: true,
        children: [{
          id: '2', label: 'Level 2', icon: 'folder-16', expanded: true,
          children: [{
            id: '3', label: 'Level 3', icon: 'folder-16', expanded: true,
            children: [{
              id: '4', label: 'Level 4', icon: 'folder-16', expanded: true,
              children: [
                { id: '5', label: 'Deep File', icon: 'file-16' },
              ],
            }],
          }],
        }],
      };
      return { deepTree, selectedId };
    },
    template: '<TreeItem v-bind="deepTree" :selected-id="selectedId" @select="selectedId = $event" />',
  }),
};
