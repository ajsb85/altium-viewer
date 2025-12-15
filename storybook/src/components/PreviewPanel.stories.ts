import type { Meta, StoryObj } from '@storybook/vue3-vite';
import PreviewPanel from './PreviewPanel.vue';
import previewSample from '../assets/preview-sample.png';
import sample1 from '../assets/sample-1_block_diagram.png';
import sample2 from '../assets/sample-2_reference.png';

/**
 * PreviewPanel - Scrollable list of schematic preview thumbnails
 * 
 * Used in the Altium viewer sidebar to display and navigate schematic sheets.
 * Supports lazy loading of images via LibLazyImage's v-lazy directive.
 * 
 * Production implementation: PreviewPanel.js (lines 193-194, 662, 685)
 */
const meta: Meta<typeof PreviewPanel> = {
  title: 'Plugins/PreviewPanel',
  component: PreviewPanel,
  tags: ['autodocs'],
  parameters: { 
    layout: 'centered',
    controls: { expanded: true, sort: 'requiredFirst' },
  },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 200px; height: 600px; background: var(--afs-background);"><story /></div>',
  })],
  argTypes: {
    panelId: {
      description: 'Unique ID for the panel element (used for mounting)',
      control: 'text',
      table: { 
        category: 'Identity',
        defaultValue: { summary: 'PreviewPanel' },
      },
    },
    selectedId: {
      description: 'ID of the currently selected item',
      control: 'text',
      table: { category: 'State' },
    },
    items: {
      description: 'Array of preview items to display',
      control: 'object',
      table: { 
        category: 'Content',
        type: { summary: 'PreviewPanelItem[]' },
      },
    },
  },
  args: {
    panelId: 'PreviewPanel',
    selectedId: '',
    items: [],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;


/**
 * Production-like preview panel with 34 schematic sheets.
 * Matches production HTML structure exactly.
 */
export const Default: Story = {
  args: {
    panelId: 'PreviewPanel',
    selectedId: '3_pdb_conn',
    items: [
      { id: '3_pdb_conn', title: '[3] 3_pdb_conn', imageSrc: previewSample },
      { id: '1_block_diagram', title: '[1] 1_block_diagram', imageSrc: sample1 },
      { id: '2_reference', title: '[2] 2_reference', imageSrc: sample2 },
      { id: '4_dc-dc_vcc3sw', title: '[4] 4_dc-dc_vcc3sw', imageSrc: previewSample },
      { id: '5_dc-dc_vcc5m-vcc3m', title: '[5] 5_dc-dc_vcc5m-vcc3m', imageSrc: previewSample },
      { id: '6_fmu_power', title: '[6] 6_fmu_power' }, // Loading state (no imageSrc)
      { id: '7_fmu_conn', title: '[7] 7_fmu_conn' },
      { id: '8_fmu_boot_leds', title: '[8] 8_fmu_boot&leds' },
      { id: '9_periph_conn', title: '[9] 9_periph_conn' },
      { id: '10_rpi_power_sequence', title: '[10] 10_rpi_power_sequence' },
      { id: '11_dc-dc_vcc1r8', title: '[11] 11_dc-dc_vcc1r8' },
      { id: '12_rpi_rtc', title: '[12] 12_rpi_rtc' },
    ],
  },
};

/**
 * Empty state when no items
 */
export const Empty: Story = {
  args: {
    items: [],
  },
};

/**
 * Scrollable list with many items
 */
export const ManyItems: Story = {
  args: {
    selectedId: '1',
    items: Array.from({ length: 34 }, (_, i) => ({
      id: String(i + 1),
      title: `[${i + 1}] sheet_${i + 1}`,
      imageSrc: i < 5 ? previewSample : undefined, // First 5 loaded, rest loading
    })),
  },
};

/**
 * Interactive selection demo
 */
export const Interactive: Story = {
  render: () => ({
    components: { PreviewPanel },
    data() {
      return {
        selectedId: '2',
        items: [
          { id: '1', title: '[1] block_diagram', imageSrc: sample1 },
          { id: '2', title: '[2] reference', imageSrc: sample2 },
          { id: '3', title: '[3] pdb_conn', imageSrc: previewSample },
        ],
      };
    },
    template: `
      <PreviewPanel 
        :items="items" 
        :selectedId="selectedId"
        @select="selectedId = $event"
      />
    `,
  }),
};

/**
 * Interactive Lazy Load Demo
 * 
 * Demonstrates scroll-based image loading with LibLazyImage's built-in lazy loading:
 * - LibLazyImage uses v-lazy directive internally (vendors.js:117670)
 * - Images only load when they enter the viewport
 * - No external observer needed - component handles it
 */
export const InteractiveLazyLoad: Story = {
  render: () => ({
    components: { PreviewPanel },
    data() {
      return {
        selectedId: '1',
        // All items have imageSrc set - LibLazyImage lazy loads them via v-lazy
        items: Array.from({ length: 34 }, (_, i) => ({
          id: String(i + 1),
          title: `[${i + 1}] sheet_${i + 1}`,
          imageSrc: i % 3 === 0 ? previewSample : (i % 3 === 1 ? sample1 : sample2),
        })),
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; height: 100%;">
        <div style="padding: 8px 12px; background: var(--afs-group); font-size: 11px; color: var(--afs-text-icon-secondary); flex-shrink: 0;">
          Scroll to lazy-load images (34 items)
        </div>
        <PreviewPanel 
          style="flex: 1; min-height: 0;"
          :items="items" 
          :selectedId="selectedId"
          @select="selectedId = $event"
        />
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    // Wait for initial render
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const panel = canvasElement.querySelector('.preview-panel');
    if (!panel) return;
    
    // Scroll through the panel to trigger lazy loading
    const scrollSteps = [200, 400, 600, 800, 1000, 1500, 2000, 2500];
    
    for (const scrollTop of scrollSteps) {
      panel.scrollTo({ top: scrollTop, behavior: 'smooth' });
      await new Promise(resolve => setTimeout(resolve, 400));
    }
    
    // Scroll back to top
    panel.scrollTo({ top: 0, behavior: 'smooth' });
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Click on items to demonstrate selection
    const items = panel.querySelectorAll('.preview-item');
    if (items.length >= 3) {
      // Click item 5
      (items[4] as HTMLElement).click();
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Click item 10
      if (items[9]) {
        (items[9] as HTMLElement).click();
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      
      // Click item 1
      (items[0] as HTMLElement).click();
    }
  },
};

/**
 * Automated Scroll Demo with Interactions
 * 
 * Uses Storybook's play function to:
 * 1. Scroll through all items (triggering lazy load)
 * 2. Select various items
 * 3. Demonstrate the complete user flow
 */
export const AutomatedScrollDemo: Story = {
  render: () => ({
    components: { PreviewPanel },
    data() {
      return {
        selectedId: '1',
        items: Array.from({ length: 20 }, (_, i) => ({
          id: String(i + 1),
          title: `[${i + 1}] schematic_${i + 1}`,
          imageSrc: i % 3 === 0 ? previewSample : (i % 3 === 1 ? sample1 : sample2),
        })),
        log: [] as string[],
      };
    },
    methods: {
      onSelect(id: string) {
        this.selectedId = id;
        this.log.push(`Selected: ${id}`);
        if (this.log.length > 5) this.log.shift();
      },
    },
    template: `
      <div style="display: flex; flex-direction: column; height: 100%;">
        <div style="padding: 8px 12px; background: var(--afs-group); font-size: 11px; color: var(--afs-text-icon-secondary); flex-shrink: 0;">
          <div>Selected: {{ selectedId }} | Total: {{ items.length }}</div>
          <div v-if="log.length" style="margin-top: 4px; opacity: 0.7;">{{ log.join(' → ') }}</div>
        </div>
        <PreviewPanel 
          style="flex: 1; min-height: 0;"
          :items="items" 
          :selectedId="selectedId"
          @select="onSelect"
        />
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const panel = canvasElement.querySelector('.preview-panel');
    if (!panel) return;

    await step('Wait for initial render', async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
    });

    await step('Scroll to middle to load images', async () => {
      panel.scrollTo({ top: 500, behavior: 'smooth' });
      await new Promise(resolve => setTimeout(resolve, 600));
    });

    await step('Scroll to bottom', async () => {
      panel.scrollTo({ top: panel.scrollHeight, behavior: 'smooth' });
      await new Promise(resolve => setTimeout(resolve, 600));
    });

    await step('Scroll back to top', async () => {
      panel.scrollTo({ top: 0, behavior: 'smooth' });
      await new Promise(resolve => setTimeout(resolve, 500));
    });

    await step('Click on items to demonstrate selection', async () => {
      const items = panel.querySelectorAll('.preview-item');
      
      for (const idx of [2, 5, 8, 12, 0]) {
        if (items[idx]) {
          (items[idx] as HTMLElement).click();
          await new Promise(resolve => setTimeout(resolve, 400));
        }
      }
    });
  },
};
