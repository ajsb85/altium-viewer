import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { userEvent, within, expect, fn } from 'storybook/test';
import ObjectsPanel from './ObjectsPanel.vue';

/**
 * ObjectsPanel - Objects Visibility Panel
 *
 * A specialized control panel for managing visibility of specific PCB object types.
 * Features include:
 * - List of object types (Pads, Vias, Tracks, etc.)
 * - Individual visibility toggles
 * - "Show Only" functionality (hover action)
 * - Master "All Objects" toggle
 * 
 * Used within the BoardItemsVisibility plugin.
 */
const meta: Meta<typeof ObjectsPanel> = {
  title: 'Plugins/ObjectsPanel',
  component: ObjectsPanel,
  tags: ['autodocs'],
  argTypes: {
    objects: {
      description: 'List of object type definitions. Each item has an ID, name, and visibility state.',
      control: 'object',
      table: {
        type: { summary: 'ObjectItem[]' },
      },
    },
    allObjectsVisible: {
      description: 'Master toggle state affecting all object types simultaneously.',
      control: 'boolean',
    },
    allObjectsLabel: {
      description: 'Text label displayed next to the master toggle checkbox.',
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
    docs: {
      description: {
        component: 'The `ObjectsPanel` provides granular control over the visibility of various PCB object types such as pads, vias, tracks, and text. It supports bulk toggling via a master checkbox and isolating specific object types.',
      },
    },
  },
  decorators: [
    () => ({
      template: `
        <div style="width: 280px; height: 400px; background: var(--afs-sidebar, #1c1c1e); border-radius: 8px; overflow: hidden; border: 1px solid var(--afs-border, #3c3c3e);">
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
 * **Default State**
 * 
 * Shows all object types (Pads, Vias, etc.) enabled by default.
 * The master checkbox reflects the state of all items.
 */
export const Default: Story = {
  args: {
    objects: pcbObjects,
    allObjectsVisible: true,
    allObjectsLabel: 'All Objects',
  },
};

/**
 * **Partially Visible**
 * 
 * Demonstrates a state where some objects are hidden.
 * The master checkbox appears in an indeterminate or unchecked state depending on logic.
 */
export const PartiallyVisible: Story = {
  args: {
    objects: pcbObjects,
    allObjectsVisible: false,
    allObjectsLabel: 'All Objects',
  },
};

/**
 * **Interactive Demo**
 * 
 * Demonstrates the full interactivity:
 * - Toggle individual items via checkbox
 * - Toggle all items via master checkbox
 * - Click "Only" button on hover to isolate an object type
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

    // Reset loop
    await step('Reset state', async () => {
       await new Promise(r => setTimeout(r, 500));
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
