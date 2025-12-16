import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { userEvent, within, expect, fn } from 'storybook/test';
import Layers from './Layers.vue';

/**
 * Layers - Layer Visibility Panel
 *
 * A specialized list layout for managing PCB/Schematic layers.
 * Features include:
 * - Color-coded indicators for each layer
 * - Visibility toggles (eye icon)
 * - "Show Only" functionality (hover action)
 * - Top/Bottom view filtering tabs
 * 
 * Used within the BoardItemsVisibility plugin.
 */
const meta: Meta<typeof Layers> = {
  title: 'Plugins/Layers',
  component: Layers,
  tags: ['autodocs'],
  argTypes: {
    layers: {
      description: 'List of layer definitions. Each layer includes an ID, name, color (hex), and visibility state.',
      control: 'object',
      table: {
        type: { summary: 'LayerItem[]' },
      },
    },
    layersViews: {
      description: 'Definitions for the view tabs (e.g., Top View, Bottom View) used to filter visible layers.',
      control: 'object',
      table: {
        type: { summary: 'LayerView[]' },
      },
    },
    showViewTabs: {
      description: 'Whether to display the Top/Bottom view switching tabs at the top of the panel.',
      control: 'boolean',
    },
  },
  args: {
    onToggleVisibility: fn(),
    onShowOnly: fn(),
    onSelectView: fn(),
  },
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    docs: {
      description: {
        component: 'The `Layers` component provides a control panel for managing the visibility of different PCB layers (e.g., Copper, Silkscreen). It supports individual toggling, "show only" mode, and view-based filtering.',
      },
    },
  },
  decorators: [
    () => ({
      template: `
        <div style="width: 280px; height: 450px; background: var(--afs-sidebar, #1c1c1e); border-radius: 8px; overflow: hidden; border: 1px solid var(--afs-border, #3c3c3e);">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const pcbLayers = [
  { id: 1, name: 'Top Copper', color: '#ff4444', isVisible: true },
  { id: 2, name: 'Bottom Copper', color: '#44ff44', isVisible: true },
  { id: 3, name: 'Top Silkscreen', color: '#ffffff', isVisible: true },
  { id: 4, name: 'Bottom Silkscreen', color: '#ffff00', isVisible: false },
  { id: 5, name: 'Top Solder Mask', color: '#884488', isVisible: true },
  { id: 6, name: 'Bottom Solder Mask', color: '#448844', isVisible: true },
  { id: 7, name: 'Mechanical 1', color: '#888888', isVisible: false },
  { id: 8, name: 'Keep-Out Layer', color: '#ff8800', isVisible: true },
];

const layerViews = [
  { id: 0, name: 'Top View', isActive: true },
  { id: 1, name: 'Bottom View', isActive: false },
];

/**
 * **Default State**
 * 
 * Shows a standard list of layers with visibility toggles.
 * Each item displays a color swatch, layer name, and visibility status.
 */
export const Default: Story = {
  args: {
    layers: pcbLayers,
    showViewTabs: false,
  },
};

/**
 * **With View Tabs**
 * 
 * Includes navigation tabs (Top/Bottom) at the top of the list.
 * This is used to quickly switch between different board perspectives.
 */
export const WithViewTabs: Story = {
  args: {
    layers: pcbLayers,
    layersViews: layerViews,
    showViewTabs: true,
  },
};

/**
 * **Interactive Demo**
 * 
 * Demonstrates the interactive features:
 * - Click visibility toggle (eye icon)
 * - Hover to see "Only" button
 * - Click "Only" to isolate a specific layer
 */
export const Interactive: Story = {
  render: (args) => ({
    components: { Layers },
    setup() {
      const layers = ref([...pcbLayers]);
      
      const handleToggle = (layer: typeof pcbLayers[0]) => {
        const item = layers.value.find(l => l.id === layer.id);
        if (item) item.isVisible = !item.isVisible;
      };
      
      const handleShowOnly = (layer: typeof pcbLayers[0]) => {
        layers.value.forEach(l => {
          l.isVisible = l.id === layer.id;
        });
      };
      
      return { args, layers, handleToggle, handleShowOnly };
    },
    template: `
      <Layers 
        :layers="layers"
        :showViewTabs="false"
        @toggleVisibility="handleToggle"
        @showOnly="handleShowOnly"
      />
    `,
  }),
  args: {
    layers: pcbLayers,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Hover over Top Copper layer', async () => {
      const layerItem = canvas.getByText('Top Copper').closest('.layers-panel__item') as HTMLElement;
      await userEvent.hover(layerItem);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Click visibility toggle', async () => {
      const toggleBtn = canvasElement.querySelector('.layers-panel__visibility-btn') as HTMLElement;
      if (toggleBtn) {
        await userEvent.click(toggleBtn);
        await new Promise(r => setTimeout(r, 200));
      }
    });

    await step('Click Only button', async () => {
      const onlyBtn = canvasElement.querySelector('.layers-panel__only-btn') as HTMLElement;
      if (onlyBtn) {
        await userEvent.click(onlyBtn);
        await new Promise(r => setTimeout(r, 200));
      }
    });

    // Reset loop
    await step('Reset state', async () => {
       // Optional reset logic if needed
       await new Promise(r => setTimeout(r, 500));
    });
  },
};

/**
 * All layers hidden
 */
export const AllHidden: Story = {
  args: {
    layers: pcbLayers.map(l => ({ ...l, isVisible: false })),
    showViewTabs: false,
  },
};
