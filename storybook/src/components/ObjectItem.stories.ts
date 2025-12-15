import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { userEvent } from 'storybook/test';
import { ref } from 'vue';
import ObjectItem from './ObjectItem.vue';
import SvgSprite from './SvgSprite.vue';

/**
 * ObjectItem - PCB object type row in visibility panel
 * 
 * Production component from app-object-panel.
 * Shows object types: Arcs, Pads, Vias, Tracks, Texts, Fills, Polygons, Regions, 3D Body, Keepouts, Connection Lines.
 * 
 * Production HTML: app-object-panel > app-object-panel__btn
 */
const meta: Meta<typeof ObjectItem> = {
  title: 'Plugins/ObjectItem',
  component: ObjectItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    backgrounds: { default: 'dark' },
  },
  decorators: [(story) => ({
    components: { story, SvgSprite },
    template: `
      <div style="width: 280px; background: var(--afs-panel, #1c1c1e); padding: 8px 16px; border-radius: 8px;">
        <SvgSprite />
        <story />
      </div>
    `,
  })],
  argTypes: {
    name: {
      description: 'Object type name',
      control: 'text',
      table: { category: 'Content' },
    },
    icon: {
      description: 'Icon name (matches svg-sprite-filled--icon-{name})',
      control: 'select',
      options: ['arcs', 'pads', 'vias', 'tracks', 'texts', 'fills', 'polygons', 'regions', '3d-body', 'keepouts', 'connection-lines', 'components'],
      table: { category: 'Appearance' },
    },
    isVisible: {
      description: 'Whether the object type is currently visible',
      control: 'boolean',
      table: { category: 'State' },
    },
  },
  args: {
    name: 'Pads',
    icon: 'pads',
    isVisible: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default visible object
 */
export const Default: Story = {
  args: {
    name: 'Pads',
    icon: 'pads',
    isVisible: true,
  },
};

/**
 * Hidden object (visibility off)
 */
export const Hidden: Story = {
  args: {
    name: 'Polygons',
    icon: 'polygons',
    isVisible: false,
  },
};

/**
 * All PCB object types from production
 */
export const AllObjects: Story = {
  decorators: [(story) => ({
    components: { story, SvgSprite },
    template: `
      <div style="width: 280px; background: var(--afs-panel, #1c1c1e); padding: 8px 16px; border-radius: 8px; max-height: 400px; overflow-y: auto;">
        <SvgSprite />
        <story />
      </div>
    `,
  })],
  render: () => ({
    components: { ObjectItem, SvgSprite },
    setup() {
      const objects = ref([
        { name: 'Arcs', icon: 'arcs', isVisible: true },
        { name: 'Pads', icon: 'pads', isVisible: true },
        { name: 'Vias', icon: 'vias', isVisible: true },
        { name: 'Tracks', icon: 'tracks', isVisible: true },
        { name: 'Texts', icon: 'texts', isVisible: true },
        { name: 'Fills', icon: 'fills', isVisible: true },
        { name: 'Polygons', icon: 'polygons', isVisible: false },
        { name: 'Regions', icon: 'regions', isVisible: true },
        { name: '3D Body', icon: '3d-body', isVisible: true },
        { name: 'Keepouts', icon: 'keepouts', isVisible: true },
        { name: 'Connection Lines', icon: 'connection-lines', isVisible: false },
      ]);
      
      const toggleObject = (index: number) => {
        objects.value[index].isVisible = !objects.value[index].isVisible;
      };
      
      const showOnly = (index: number) => {
        objects.value.forEach((o, i) => {
          o.isVisible = i === index;
        });
      };
      
      return { objects, toggleObject, showOnly };
    },
    template: `
      <div>
        <div style="font-size: 13px; color: var(--afs-text-icon-primary, #fff); margin-bottom: 8px; font-weight: 500;">
          All Objects
        </div>
        <ObjectItem
          v-for="(obj, i) in objects"
          :key="obj.icon"
          :name="obj.name"
          :icon="obj.icon"
          :isVisible="obj.isVisible"
          @toggle="toggleObject(i)"
          @only="showOnly(i)"
        />
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    await step('Wait for sprite to load', async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
    });
    
    await step('Hover objects to reveal controls', async () => {
      const buttons = canvasElement.querySelectorAll('.app-object-panel__btn');
      for (let i = 0; i < Math.min(buttons.length, 5); i++) {
        await userEvent.hover(buttons[i]);
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    });
  },
};

/**
 * Interactive single object
 */
export const Interactive: Story = {
  render: () => ({
    components: { ObjectItem, SvgSprite },
    setup() {
      const obj = ref({ name: 'Tracks', icon: 'tracks', isVisible: true });
      
      const toggle = () => {
        obj.value.isVisible = !obj.value.isVisible;
      };
      
      return { obj, toggle };
    },
    template: `
      <div>
        <SvgSprite />
        <ObjectItem
          :name="obj.name"
          :icon="obj.icon"
          :isVisible="obj.isVisible"
          @toggle="toggle"
        />
        <div style="margin-top: 12px; font-size: 11px; color: var(--afs-text-icon-secondary, #999);">
          Visible: {{ obj.isVisible }}
        </div>
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const button = canvasElement.querySelector('.app-object-panel__btn');
    
    await step('Click to toggle', async () => {
      if (button) {
        await userEvent.click(button);
        await new Promise(resolve => setTimeout(resolve, 300));
        await userEvent.click(button);
      }
    });
  },
};

/**
 * Icon gallery showing all available icons
 */
export const IconGallery: Story = {
  decorators: [(story) => ({
    components: { story, SvgSprite },
    template: `
      <div style="width: 400px; background: var(--afs-panel, #1c1c1e); padding: 16px; border-radius: 8px;">
        <SvgSprite />
        <story />
      </div>
    `,
  })],
  render: () => ({
    components: { SvgSprite },
    setup() {
      const icons = [
        'arcs', 'pads', 'vias', 'tracks', 'texts', 
        'fills', 'polygons', 'regions', '3d-body', 
        'keepouts', 'connection-lines', 'components',
      ];
      return { icons };
    },
    template: `
      <div>
        <div style="font-size: 13px; color: var(--afs-text-icon-primary, #fff); margin-bottom: 12px; font-weight: 500;">
          PCB Object Icons
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
          <div v-for="icon in icons" :key="icon" style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
            <svg style="width: 24px; height: 24px; color: var(--afs-text-icon-secondary, #999);">
              <use :xlink:href="'#svg-sprite-filled--icon-' + icon"></use>
            </svg>
            <span style="font-size: 10px; color: var(--afs-text-icon-secondary, #999); text-align: center;">{{ icon }}</span>
          </div>
        </div>
      </div>
    `,
  }),
};
