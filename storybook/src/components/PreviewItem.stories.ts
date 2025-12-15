import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect } from 'storybook/test';
import PreviewItem from './PreviewItem.vue';
import previewSample from '../assets/preview-sample.png';
import sample1 from '../assets/sample-1_block_diagram.png';
import sample2 from '../assets/sample-2_reference.png';

/**
 * PreviewItem - Individual schematic preview thumbnail
 * 
 * Used in PreviewPanel to display schematic sheets with lazy-loaded thumbnails.
 * Supports selection state, icons, and modification indicators.
 */
const meta: Meta<typeof PreviewItem> = {
  title: 'Plugins/PreviewItem',
  component: PreviewItem,
  tags: ['autodocs'],
  parameters: { 
    layout: 'centered',
    controls: { expanded: true, sort: 'requiredFirst' },
  },
  decorators: [(story) => ({ 
    components: { story }, 
    template: '<div style="width: 200px; background: var(--afs-panel); padding: 8px; border-radius: 8px;"><story /></div>' 
  })],
  argTypes: {
    // Required props
    title: {
      description: 'Item title displayed below the thumbnail',
      control: 'text',
      table: { category: 'Content' },
    },
    imageSrc: {
      description: 'Image URL for the thumbnail (lazy loaded)',
      control: 'select',
      options: [previewSample, sample1, sample2, ''],
      mapping: {
        [previewSample]: previewSample,
        [sample1]: sample1,
        [sample2]: sample2,
        '': '',
      },
      table: { category: 'Content' },
    },
    // Optional props
    id: {
      description: 'Unique identifier for the item',
      control: 'text',
      table: { category: 'Identity' },
    },
    isSelected: {
      description: 'Whether this item is currently selected (shows blue highlight)',
      control: 'boolean',
      table: { category: 'State' },
    },
    icon: {
      description: 'Optional icon name to display before the title',
      control: 'select',
      options: ['', 'pcb-16', 'schematic-16', 'folder-16', 'file-16'],
      table: { category: 'Content' },
    },
  },
  args: {
    // Default values
    title: '[1] schematic_sheet',
    imageSrc: previewSample,
    id: 'item-1',
    isSelected: false,
    icon: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default preview item showing a schematic thumbnail
 */
export const Default: Story = {
  args: { 
    title: '[3] 3_pdb_conn', 
    imageSrc: previewSample,
    id: '3_pdb_conn',
  },
};

/**
 * Selected state with blue highlight background
 */
export const Selected: Story = {
  args: { 
    title: '[3] 3_pdb_conn', 
    imageSrc: previewSample, 
    isSelected: true,
  },
  play: async ({ canvasElement }) => {
    const item = canvasElement.querySelector('.preview-item');
    await expect(item).toHaveClass('is-selected');
  },
};

/**
 * Preview item with icon before title
 */
export const WithIcon: Story = {
  args: { 
    title: 'Main PCB', 
    imageSrc: previewSample, 
    icon: 'pcb-16',
  },
};

/**
 * Loading state - shows spinner when no imageSrc provided
 */
export const Loading: Story = {
  args: { 
    title: '[5] loading_sheet', 
    imageSrc: '',
    id: 'loading',
  },
};

/**
 * Interactive demo with click handling
 */
export const Interactive: Story = {
  render: (args) => ({
    components: { PreviewItem },
    setup() {
      return { args };
    },
    data() {
      return { 
        isSelected: false,
        clickCount: 0,
      };
    },
    template: `
      <div>
        <PreviewItem 
          v-bind="args"
          :isSelected="isSelected"
          @click="isSelected = !isSelected; clickCount++"
        />
        <div style="margin-top: 8px; font-size: 11px; color: var(--afs-text-icon-secondary);">
          Clicks: {{ clickCount }} | Selected: {{ isSelected }}
        </div>
      </div>
    `,
  }),
  args: {
    title: '[1] click_me',
    imageSrc: previewSample,
  },
  play: async ({ canvasElement }) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const item = canvasElement.querySelector('.preview-item') as HTMLElement;
    if (item) {
      // Click to select
      item.click();
      await new Promise(resolve => setTimeout(resolve, 400));
      
      // Click to deselect
      item.click();
      await new Promise(resolve => setTimeout(resolve, 400));
      
      // Final click to select
      item.click();
    }
  },
};

/**
 * Multiple items in a list context with selection
 */
export const InList: Story = {
  decorators: [(story) => ({
    components: { story },
    template: `
      <div style="width: 200px; background: var(--afs-panel); padding: 8px; border-radius: 8px;">
        <story />
      </div>
    `,
  })],
  render: () => ({
    components: { PreviewItem },
    data() {
      return {
        selectedId: '3',
        items: [
          { id: '1', title: '[1] block_diagram', imageSrc: previewSample },
          { id: '2', title: '[2] power_supply', imageSrc: sample1 },
          { id: '3', title: '[3] 3_pdb_conn', imageSrc: sample2 },
          { id: '4', title: '[4] loading...', imageSrc: '' },
        ],
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <PreviewItem 
          v-for="item in items" 
          :key="item.id"
          v-bind="item"
          :isSelected="item.id === selectedId"
          @click="selectedId = item.id"
        />
        <div style="font-size: 11px; color: var(--afs-text-icon-secondary);">
          Selected: {{ selectedId }}
        </div>
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const items = canvasElement.querySelectorAll('.preview-item');
    
    await step('Wait for render', async () => {
      await new Promise(resolve => setTimeout(resolve, 600));
    });
    
    await step('Click through items', async () => {
      for (const item of items) {
        (item as HTMLElement).click();
        await new Promise(resolve => setTimeout(resolve, 400));
      }
    });
    
    await step('Select first item', async () => {
      (items[0] as HTMLElement).click();
      await new Promise(resolve => setTimeout(resolve, 300));
    });
  },
};
