import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { userEvent, within, expect, fn } from 'storybook/test';
import Layers from './Layers.vue';

/**
 * Layers - Layer Visibility Panel
 *
 * Displays PCB layers with visibility toggles and "Only" buttons.
 * Part of the BoardItemsVisibility plugin.
 */
const meta: Meta<typeof Layers> = {
  title: 'Plugins/Layers',
  component: Layers,
  tags: ['autodocs'],
  argTypes: {
    layers: {
      description: 'Array of layer items with id, name, color, and visibility',
      control: 'object',
    },
    layersViews: {
      description: 'View tabs (Top/Bottom board view)',
      control: 'object',
    },
    showViewTabs: {
      description: 'Show Top/Bottom view tabs',
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
  },
  decorators: [
    () => ({
      template: `
        <div style="width: 280px; height: 450px; background: var(--afs-sidebar, #1c1c1e); border-radius: 8px; overflow: hidden;">
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
 * Default layers list
 */
export const Default: Story = {
  args: {
    layers: pcbLayers,
    showViewTabs: false,
  },
};

/**
 * With Top/Bottom view tabs
 */
export const WithViewTabs: Story = {
  args: {
    layers: pcbLayers,
    layersViews: layerViews,
    showViewTabs: true,
  },
};

/**
 * Interactive layer toggling
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
