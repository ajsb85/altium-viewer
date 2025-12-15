import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import BoardItemsVisibility from './BoardItemsVisibility.vue';

/**
 * BoardItemsVisibility - Main layers/objects visibility panel
 * 
 * @see BoardItemsVisibility.js plugin
 */
const meta: Meta<typeof BoardItemsVisibility> = {
  title: 'Plugins/BoardItemsVisibility',
  component: BoardItemsVisibility,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Layers and objects visibility panel for PCB designs. Allows toggling individual layers and object types.',
      },
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="width: 280px; height: 400px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleLayers = [
  { id: 'top-copper', name: 'Top Copper', color: '#dc2626', isVisible: true },
  { id: 'bottom-copper', name: 'Bottom Copper', color: '#2563eb', isVisible: true },
  { id: 'top-solder', name: 'Top Solder Mask', color: '#16a34a', isVisible: true },
  { id: 'bottom-solder', name: 'Bottom Solder Mask', color: '#16a34a', isVisible: false },
  { id: 'top-silk', name: 'Top Silkscreen', color: '#fbbf24', isVisible: true },
  { id: 'bottom-silk', name: 'Bottom Silkscreen', color: '#fbbf24', isVisible: false },
  { id: 'outline', name: 'Board Outline', color: '#6366f1', isVisible: true },
];

const sampleObjects = [
  { id: 'pads', name: 'Pads', isVisible: true },
  { id: 'tracks', name: 'Tracks', isVisible: true },
  { id: 'vias', name: 'Vias', isVisible: true },
  { id: 'fills', name: 'Fills', isVisible: true },
  { id: 'polygons', name: 'Polygons', isVisible: false },
  { id: 'text', name: 'Text', isVisible: true },
  { id: 'components', name: 'Components', isVisible: true },
];

/** Default with layers and objects */
export const Default: Story = {
  render: () => ({
    components: { BoardItemsVisibility },
    setup() {
      const layers = ref([...sampleLayers]);
      const objects = ref([...sampleObjects]);
      
      const handleLayerToggle = (layer: any) => {
        const item = layers.value.find(l => l.id === layer.id);
        if (item) item.isVisible = !item.isVisible;
      };
      
      const handleObjectToggle = (obj: any) => {
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
};

/** Layers only */
export const LayersOnly: Story = {
  args: {
    layers: sampleLayers,
    showObjects: false,
  },
};

/** Objects only */
export const ObjectsOnly: Story = {
  args: {
    objects: sampleObjects,
    showLayers: false,
  },
};

/** Without view tabs */
export const NoViewTabs: Story = {
  args: {
    layers: sampleLayers,
    objects: sampleObjects,
    showViewTabs: false,
  },
};
