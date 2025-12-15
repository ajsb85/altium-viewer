import type { Meta, StoryObj } from '@storybook/vue3-vite';
import PreviewItem from './PreviewItem.vue';
import previewSample from '../assets/preview-sample.png';

const meta: Meta<typeof PreviewItem> = {
  title: 'Plugins/PreviewItem',
  component: PreviewItem,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({ components: { story }, template: '<div style="width: 200px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default preview item matching production example:
 * `[3] 3_pdb_conn` schematic thumbnail
 */
export const Default: Story = {
  args: { 
    title: '[3] 3_pdb_conn', 
    imageSrc: previewSample,
    id: '3_pdb_conn' 
  },
};

/**
 * Selected state with blue highlight background
 */
export const Selected: Story = {
  args: { 
    title: '[3] 3_pdb_conn', 
    imageSrc: previewSample, 
    isSelected: true 
  },
};

/**
 * Preview item with icon before title
 */
export const WithIcon: Story = {
  args: { 
    title: 'Main PCB', 
    imageSrc: previewSample, 
    icon: 'pcb-16' 
  },
};

/**
 * Multiple items in a list context
 */
export const InList: Story = {
  decorators: [(story) => ({
    components: { story },
    template: `
      <div style="width: 200px; background: var(--afs-panel); padding: 8px; border-radius: 4px;">
        <story />
      </div>
    `,
  })],
  render: () => ({
    components: { PreviewItem },
    setup() {
      const items = [
        { id: '1', title: '[1] block_diagram', imageSrc: previewSample },
        { id: '2', title: '[2] power_supply', imageSrc: previewSample },
        { id: '3', title: '[3] 3_pdb_conn', imageSrc: previewSample, isSelected: true },
      ];
      return { items, previewSample };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <PreviewItem 
          v-for="item in items" 
          :key="item.id"
          v-bind="item"
        />
      </div>
    `,
  }),
};
