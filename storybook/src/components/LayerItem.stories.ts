import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, within, userEvent } from 'storybook/test';
import { ref } from 'vue';
import LayerItem from './LayerItem.vue';

/**
 * LayerItem - Individual PCB layer row in visibility panel
 * 
 * Production component from BoardItemsVisibility modal.
 * Shows layer with color swatch, name, checkbox, and visibility controls.
 * 
 * Production CSS: production.css:32139-32241
 */
const meta: Meta<typeof LayerItem> = {
  title: 'Plugins/LayerItem',
  component: LayerItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    backgrounds: { default: 'dark' },
  },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 280px; background: var(--afs-panel, #1c1c1e); padding: 8px 16px; border-radius: 8px;"><story /></div>',
  })],
  argTypes: {
    name: {
      description: 'Layer name displayed in the row',
      control: 'text',
      table: { category: 'Content' },
    },
    color: {
      description: 'Layer color (CSS color value)',
      control: 'color',
      table: { category: 'Appearance' },
    },
    isVisible: {
      description: 'Whether the layer is currently visible',
      control: 'boolean',
      table: { category: 'State' },
    },
    isChecked: {
      description: 'Whether the layer checkbox is checked (for batch operations)',
      control: 'boolean',
      table: { category: 'State' },
    },
  },
  args: {
    name: 'Top Copper',
    color: 'red',
    isVisible: true,
    isChecked: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default visible layer
 */
export const Default: Story = {
  args: {
    name: 'Top Copper',
    color: 'red',
    isVisible: true,
  },
};

/**
 * Hidden layer (dimmed name, eye-off icon)
 */
export const Hidden: Story = {
  args: {
    name: 'Bottom Solder',
    color: 'purple',
    isVisible: false,
  },
};

/**
 * Checked layer (checkbox visible and checked)
 */
export const Checked: Story = {
  args: {
    name: 'GND1',
    color: 'green',
    isVisible: true,
    isChecked: true,
  },
};

/**
 * Interactive layer with toggle functionality
 */
export const Interactive: Story = {
  render: () => ({
    components: { LayerItem },
    setup() {
      const layer = ref({
        name: 'Top Copper',
        color: 'red',
        isVisible: true,
        isChecked: false,
      });
      
      const toggleVisibility = () => {
        layer.value.isVisible = !layer.value.isVisible;
      };
      
      const toggleCheck = (checked: boolean) => {
        layer.value.isChecked = checked;
      };
      
      return { layer, toggleVisibility, toggleCheck };
    },
    template: `
      <div>
        <LayerItem
          :name="layer.name"
          :color="layer.color"
          :isVisible="layer.isVisible"
          :isChecked="layer.isChecked"
          @toggle="toggleVisibility"
          @check="toggleCheck"
        />
        <div style="margin-top: 12px; font-size: 11px; color: var(--afs-text-icon-secondary, #999);">
          Visible: {{ layer.isVisible }} | Checked: {{ layer.isChecked }}
        </div>
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    await step('Wait for render', async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
    });
    
    await step('Hover to reveal controls', async () => {
      const row = canvasElement.querySelector('.app-layers-panel__layer-row');
      if (row) {
        await userEvent.hover(row);
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    });
  },
};

/**
 * Production-like PCB layer stack
 */
export const LayerStack: Story = {
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 280px; background: var(--afs-panel, #1c1c1e); padding: 8px 16px; border-radius: 8px; max-height: 300px; overflow-y: auto;"><story /></div>',
  })],
  render: () => ({
    components: { LayerItem },
    setup() {
      const layers = ref([
        { id: 'top', name: 'Top', color: 'red', isVisible: true, isChecked: true },
        { id: 'l3', name: 'L3', color: '#bc8e00', isVisible: false, isChecked: false },
        { id: 'l5', name: 'L5', color: '#70dbfa', isVisible: false, isChecked: false },
        { id: 'l6', name: 'L6', color: '#00cc66', isVisible: false, isChecked: false },
        { id: 'gnd1', name: 'GND1', color: 'green', isVisible: false, isChecked: false },
        { id: 'power', name: 'Power', color: 'maroon', isVisible: false, isChecked: false },
        { id: 'gnd2', name: 'GND2', color: 'purple', isVisible: false, isChecked: false },
        { id: 'bottom', name: 'Bottom', color: 'blue', isVisible: false, isChecked: false },
      ]);
      
      const toggleLayer = (index: number) => {
        layers.value[index].isVisible = !layers.value[index].isVisible;
      };
      
      const showOnly = (index: number) => {
        layers.value.forEach((l, i) => {
          l.isVisible = i === index;
        });
      };
      
      const checkLayer = (index: number, checked: boolean) => {
        layers.value[index].isChecked = checked;
      };
      
      return { layers, toggleLayer, showOnly, checkLayer };
    },
    template: `
      <div>
        <div style="font-size: 13px; color: var(--afs-text-icon-primary, #fff); margin-bottom: 8px; font-weight: 500;">
          Copper Layers
        </div>
        <LayerItem
          v-for="(layer, i) in layers"
          :key="layer.id"
          :name="layer.name"
          :color="layer.color"
          :isVisible="layer.isVisible"
          :isChecked="layer.isChecked"
          @toggle="toggleLayer(i)"
          @only="showOnly(i)"
          @check="checkLayer(i, $event)"
        />
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const rows = canvasElement.querySelectorAll('.app-layers-panel__layer-row');
    
    await step('Wait for render', async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
    });
    
    await step('Hover each layer', async () => {
      for (let i = 0; i < Math.min(rows.length, 4); i++) {
        await userEvent.hover(rows[i]);
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    });
  },
};

/**
 * All copper layer colors from production
 */
export const ColorPalette: Story = {
  render: () => ({
    components: { LayerItem },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2px;">
        <LayerItem name="Top (Red)" color="red" :isVisible="true" />
        <LayerItem name="L3 (Gold)" color="#bc8e00" :isVisible="true" />
        <LayerItem name="L5 (Cyan)" color="#70dbfa" :isVisible="true" />
        <LayerItem name="L6 (Teal)" color="#00cc66" :isVisible="true" />
        <LayerItem name="GND1 (Green)" color="green" :isVisible="true" />
        <LayerItem name="Power (Maroon)" color="maroon" :isVisible="true" />
        <LayerItem name="GND2 (Purple)" color="purple" :isVisible="true" />
        <LayerItem name="Bottom (Blue)" color="blue" :isVisible="true" />
      </div>
    `,
  }),
};
