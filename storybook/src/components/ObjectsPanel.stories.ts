import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { userEvent, within, expect, fn } from 'storybook/test';
import ObjectsPanel from './ObjectsPanel.vue';

/**
 * ObjectsPanel - Objects Visibility Panel
 *
 * Displays object types (Pads, Tracks, Vias) with visibility toggles.
 * Part of the BoardItemsVisibility plugin.
 */
const meta: Meta<typeof ObjectsPanel> = {
  title: 'Plugins/ObjectsPanel',
  component: ObjectsPanel,
  tags: ['autodocs'],
  argTypes: {
    objects: {
      description: 'Array of object items with id, name, and visibility',
      control: 'object',
    },
    allObjectsVisible: {
      description: 'Master toggle state for all objects',
      control: 'boolean',
    },
    allObjectsLabel: {
      description: 'Label for the "all objects" toggle',
      control: 'text',
    },
  },
  args: {
    onToggleObject: fn(),
    onShowOnly: fn(),
    onToggleAllObjects: fn(),
  },
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
  },
  decorators: [
    () => ({
      template: `
        <div style="width: 280px; height: 400px; background: var(--afs-sidebar, #1c1c1e); border-radius: 8px; overflow: hidden;">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const pcbObjects = [
  { id: 'pads', name: 'Pads', isVisible: true },
  { id: 'vias', name: 'Vias', isVisible: true },
  { id: 'tracks', name: 'Tracks', isVisible: true },
  { id: 'polygons', name: 'Polygons', isVisible: true },
  { id: 'fills', name: 'Fills', isVisible: false },
  { id: 'arcs', name: 'Arcs', isVisible: true },
  { id: 'components', name: 'Components', isVisible: true },
  { id: 'text', name: 'Text', isVisible: false },
];

/**
 * Default objects list
 */
export const Default: Story = {
  args: {
    objects: pcbObjects,
    allObjectsVisible: true,
    allObjectsLabel: 'All Objects',
  },
};

/**
 * Some objects hidden
 */
export const PartiallyVisible: Story = {
  args: {
    objects: pcbObjects,
    allObjectsVisible: false,
    allObjectsLabel: 'All Objects',
  },
};

/**
 * Interactive object toggling
 */
export const Interactive: Story = {
  render: (args) => ({
    components: { ObjectsPanel },
    setup() {
      const objects = ref([...pcbObjects]);
      const allVisible = ref(true);
      
      const handleToggle = (obj: typeof pcbObjects[0]) => {
        const item = objects.value.find(o => o.id === obj.id);
        if (item) item.isVisible = !item.isVisible;
        allVisible.value = objects.value.every(o => o.isVisible);
      };
      
      const handleShowOnly = (obj: typeof pcbObjects[0]) => {
        objects.value.forEach(o => {
          o.isVisible = o.id === obj.id;
        });
        allVisible.value = false;
      };
      
      const handleToggleAll = (visible: boolean) => {
        objects.value.forEach(o => o.isVisible = visible);
        allVisible.value = visible;
      };
      
      return { args, objects, allVisible, handleToggle, handleShowOnly, handleToggleAll };
    },
    template: `
      <ObjectsPanel 
        :objects="objects"
        :allObjectsVisible="allVisible"
        allObjectsLabel="All Objects"
        @toggleObject="handleToggle"
        @showOnly="handleShowOnly"
        @toggleAllObjects="handleToggleAll"
      />
    `,
  }),
  args: {
    objects: pcbObjects,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Toggle All Objects checkbox', async () => {
      const allCheckbox = canvas.getByLabelText(/all objects/i);
      await userEvent.click(allCheckbox);
      await new Promise(r => setTimeout(r, 200));
    });

    await step('Toggle Pads checkbox', async () => {
      const padsCheckbox = canvas.getByLabelText(/pads/i);
      await userEvent.click(padsCheckbox);
      await new Promise(r => setTimeout(r, 200));
    });

    await step('Hover over Tracks item to reveal Only button', async () => {
      const tracksItem = canvas.getByText('Tracks').closest('.objects-panel__item') as HTMLElement;
      await userEvent.hover(tracksItem);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Click Only button for Tracks', async () => {
      const onlyBtn = canvasElement.querySelector('.objects-panel__only-btn:not([style*="opacity: 0"])') as HTMLElement;
      if (onlyBtn) {
        await userEvent.click(onlyBtn);
        await new Promise(r => setTimeout(r, 200));
      }
    });
  },
};

/**
 * All objects hidden
 */
export const AllHidden: Story = {
  args: {
    objects: pcbObjects.map(o => ({ ...o, isVisible: false })),
    allObjectsVisible: false,
    allObjectsLabel: 'All Objects',
  },
};
