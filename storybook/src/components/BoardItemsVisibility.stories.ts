import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, within, userEvent, fn } from 'storybook/test';
import { ref } from 'vue';
import BoardItemsVisibility from './BoardItemsVisibility.vue';

/**
 * BoardItemsVisibility - PCB Layers/Objects visibility panel
 * 
 * Full modal panel from production showing:
 * - Tabs: Layers | Objects
 * - View switcher: Top | Bottom + View Stackup link
 * - Accordion groups: Copper, Solder Mask, Paste Mask, Silkscreen, Mechanical, Other
 * - Individual layer rows with checkbox, color, name, Only/visibility buttons
 * 
 * Production HTML: lib-modal > board-visibility > tab-panel + app-layers-panel
 * Production CSS: production.css:32083-32248
 */
const meta: Meta<typeof BoardItemsVisibility> = {
  title: 'Plugins/BoardItemsVisibility',
  component: BoardItemsVisibility,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component: `
PCB layer and object visibility control panel.

**Features:**
- Tab switching between Layers and Objects views
- Top/Bottom board side switcher
- Collapsible accordion groups
- Individual layer visibility toggles
- "Only" button to show single layer
- Batch selection via checkboxes
        `,
      },
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="width: 320px; height: 500px; background: var(--afs-panel, #1c1c1e); border-radius: 8px; overflow: hidden;"><story /></div>',
    }),
  ],
  argTypes: {
    layers: {
      description: 'Array of layer objects with id, name, color, isVisible',
      control: 'object',
      table: { category: 'Content' },
    },
    objects: {
      description: 'Array of object types with id, name, isVisible',
      control: 'object',
      table: { category: 'Content' },
    },
    showLayers: {
      description: 'Show Layers tab',
      control: 'boolean',
      table: { category: 'Features' },
    },
    showObjects: {
      description: 'Show Objects tab',
      control: 'boolean',
      table: { category: 'Features' },
    },
    showViewTabs: {
      description: 'Show Top/Bottom view switcher',
      control: 'boolean',
      table: { category: 'Features' },
    },
  },
  args: {
    onLayerToggle: fn(),
    onObjectToggle: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Production-accurate layer data from the HTML
const productionLayers = {
  copper: [
    { id: 'top', name: 'Top', color: 'red', isVisible: true },
    { id: 'l3', name: 'L3', color: '#bc8e00', isVisible: false },
    { id: 'l5', name: 'L5', color: '#70dbfa', isVisible: false },
    { id: 'l6', name: 'L6', color: '#00cc66', isVisible: false },
    { id: 'gnd1', name: 'GND1', color: 'green', isVisible: false },
    { id: 'power', name: 'Power', color: 'maroon', isVisible: false },
    { id: 'gnd2', name: 'GND2', color: 'purple', isVisible: false },
    { id: 'bottom', name: 'Bottom', color: 'blue', isVisible: false },
  ],
  solderMask: [
    { id: 'top-solder', name: 'Top Solder', color: 'purple', isVisible: false },
    { id: 'bottom-solder', name: 'Bottom Solder', color: 'fuchsia', isVisible: false },
  ],
  pasteMask: [
    { id: 'top-paste', name: 'Top Paste', color: 'gray', isVisible: false },
    { id: 'bottom-paste', name: 'Bottom Paste', color: 'maroon', isVisible: false },
  ],
  silkscreen: [
    { id: 'top-overlay', name: 'Top Overlay', color: 'yellow', isVisible: false },
    { id: 'bottom-overlay', name: 'Bottom Overlay', color: 'olive', isVisible: false },
  ],
  mechanical: [
    { id: 'mech1', name: 'Mechanical 1', color: 'fuchsia', isVisible: false },
    { id: 'fab-notes', name: 'Fab notes', color: 'purple', isVisible: false },
    { id: 'private-notes', name: 'Private notes', color: 'green', isVisible: false },
    { id: 'dimensions', name: 'Dimensions', color: 'olive', isVisible: false },
    { id: 'board-outline', name: 'Board outline', color: 'fuchsia', isVisible: false },
    { id: 'top-courtyard', name: 'Top Courtyard', color: 'purple', isVisible: false },
    { id: 'top-daughter', name: 'Top Daughter board outline', color: 'green', isVisible: false },
    { id: 'bottom-daughter', name: 'Bottom Daughter board outline', color: 'olive', isVisible: false },
    { id: 'bottom-courtyard', name: 'Bottom Courtyard', color: 'fuchsia', isVisible: false },
    { id: 'top-center', name: 'Top Component Center', color: 'purple', isVisible: false },
    { id: 'bottom-center', name: 'Bottom Component Center', color: 'green', isVisible: true },
    { id: '3d-top', name: '3D Body Top', color: 'fuchsia', isVisible: false },
    { id: '3d-bottom', name: '3D Body Bottom', color: 'purple', isVisible: false },
    { id: 'assy-top', name: 'Assembly Top', color: 'green', isVisible: false },
    { id: 'assy-bottom', name: 'Assembly Bottom', color: 'black', isVisible: false },
    { id: 'top-designator', name: 'Top Designator', color: 'green', isVisible: false },
    { id: 'bottom-designator', name: 'Bottom Designator', color: 'olive', isVisible: false },
  ],
  other: [
    { id: 'multi-layer', name: 'Multi-Layer', color: 'silver', isVisible: true },
    { id: 'drill-guide', name: 'Drill Guide', color: 'maroon', isVisible: true },
    { id: 'keep-out', name: 'Keep-Out Layer', color: 'fuchsia', isVisible: true },
    { id: 'drill-drawing', name: 'Drill Drawing', color: '#ff002a', isVisible: true },
  ],
};

const sampleObjects = [
  { id: 'pads', name: 'Pads', isVisible: true },
  { id: 'tracks', name: 'Tracks', isVisible: true },
  { id: 'vias', name: 'Vias', isVisible: true },
  { id: 'fills', name: 'Fills', isVisible: true },
  { id: 'polygons', name: 'Polygons', isVisible: false },
  { id: 'text', name: 'Text', isVisible: true },
  { id: 'components', name: 'Components', isVisible: true },
  { id: 'arcs', name: 'Arcs', isVisible: true },
  { id: 'regions', name: 'Regions', isVisible: true },
  { id: 'rooms', name: 'Rooms', isVisible: false },
];

// Flatten all layers into single array
const allLayers = [
  ...productionLayers.copper,
  ...productionLayers.solderMask,
  ...productionLayers.pasteMask,
  ...productionLayers.silkscreen,
  ...productionLayers.mechanical,
  ...productionLayers.other,
];

/**
 * Full production panel with all layer groups
 */
export const Default: Story = {
  render: () => ({
    components: { BoardItemsVisibility },
    setup() {
      const layers = ref([...allLayers]);
      const objects = ref([...sampleObjects]);
      
      const handleLayerToggle = (layer: typeof layers.value[0]) => {
        const item = layers.value.find(l => l.id === layer.id);
        if (item) item.isVisible = !item.isVisible;
      };
      
      const handleObjectToggle = (obj: typeof objects.value[0]) => {
        const item = objects.value.find(o => o.id === obj.id);
        if (item) item.isVisible = !item.isVisible;
      };
      
      return { layers, objects, handleLayerToggle, handleObjectToggle };
    },
    template: `
      <BoardItemsVisibility 
        :layers="layers" 
        :objects="objects"
        @layer-toggle="handleLayerToggle"
        @object-toggle="handleObjectToggle"
      />
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    
    await step('Verify tabs are present', async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      const layersTab = canvas.getByText('Layers');
      await expect(layersTab).toBeInTheDocument();
    });
    
    await step('Switch to Objects tab', async () => {
      const objectsTab = canvas.getByText('Objects');
      await userEvent.click(objectsTab);
      await new Promise(resolve => setTimeout(resolve, 300));
    });
    
    await step('Switch back to Layers tab', async () => {
      const layersTab = canvas.getByText('Layers');
      await userEvent.click(layersTab);
      await new Promise(resolve => setTimeout(resolve, 300));
    });
  },
};

/**
 * 8-layer copper stack (typical complex PCB)
 */
export const EightLayerBoard: Story = {
  args: {
    layers: productionLayers.copper,
    showObjects: false,
  },
  render: (args) => ({
    components: { BoardItemsVisibility },
    setup() {
      const layers = ref([...productionLayers.copper]);
      return { layers, args };
    },
    template: `
      <BoardItemsVisibility 
        :layers="layers" 
        :showObjects="false"
        @layer-toggle="(l) => { const item = layers.find(x => x.id === l.id); if (item) item.isVisible = !item.isVisible; }"
      />
    `,
  }),
};

/**
 * Objects view only
 */
export const ObjectsOnly: Story = {
  args: {
    objects: sampleObjects,
    showLayers: false,
  },
  render: (args) => ({
    components: { BoardItemsVisibility },
    setup() {
      const objects = ref([...sampleObjects]);
      return { objects, args };
    },
    template: `
      <BoardItemsVisibility 
        :objects="objects" 
        :showLayers="false"
        @object-toggle="(o) => { const item = objects.find(x => x.id === o.id); if (item) item.isVisible = !item.isVisible; }"
      />
    `,
  }),
};

/**
 * Layers only (no objects tab)
 */
export const LayersOnly: Story = {
  args: {
    layers: allLayers,
    showObjects: false,
  },
};

/**
 * Mechanical layers focus (many layers)
 */
export const MechanicalLayers: Story = {
  args: {
    layers: productionLayers.mechanical,
    showObjects: false,
  },
  render: (args) => ({
    components: { BoardItemsVisibility },
    setup() {
      const layers = ref([...productionLayers.mechanical]);
      return { layers };
    },
    template: `
      <BoardItemsVisibility 
        :layers="layers" 
        :showObjects="false"
      />
    `,
  }),
};

/**
 * No view tabs (experimental)
 */
export const NoViewTabs: Story = {
  tags: ['experimental'],
  args: {
    layers: productionLayers.copper,
    objects: sampleObjects,
    showViewTabs: false,
  },
};

/**
 * Interactive demo with layer toggling
 */
export const InteractiveDemo: Story = {
  render: () => ({
    components: { BoardItemsVisibility },
    setup() {
      const layers = ref([...allLayers]);
      const objects = ref([...sampleObjects]);
      const visibleCount = ref(0);
      
      const updateCount = () => {
        visibleCount.value = layers.value.filter(l => l.isVisible).length;
      };
      
      updateCount();
      
      const handleLayerToggle = (layer: typeof layers.value[0]) => {
        const item = layers.value.find(l => l.id === layer.id);
        if (item) {
          item.isVisible = !item.isVisible;
          updateCount();
        }
      };
      
      return { layers, objects, visibleCount, handleLayerToggle };
    },
    template: `
      <div style="display: flex; flex-direction: column; height: 100%;">
        <div style="padding: 8px 12px; background: var(--afs-group, #2c2c2e); font-size: 11px; color: var(--afs-text-icon-secondary, #999); flex-shrink: 0;">
          Visible layers: {{ visibleCount }} / {{ layers.length }}
        </div>
        <BoardItemsVisibility 
          style="flex: 1;"
          :layers="layers" 
          :objects="objects"
          @layer-toggle="handleLayerToggle"
        />
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    await step('Wait for render', async () => {
      await new Promise(resolve => setTimeout(resolve, 600));
    });
    
    await step('Interact with layers', async () => {
      const rows = canvasElement.querySelectorAll('.app-layers-panel__layer-row, [class*="layer"]');
      for (let i = 0; i < Math.min(rows.length, 3); i++) {
        await userEvent.hover(rows[i]);
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    });
  },
};
