import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { userEvent, within, expect } from 'storybook/test';
import TabPanel from './TabPanel.vue';

/**
 * TabPanel - Tab Navigation Component
 *
 * A navigational component for switching between views within a sidebar panel.
 * Features include:
 * - Text-based labels
 * - Optional badges (counters or indicators)
 * - Active state styling
 * - Full width layout
 * 
 * Commonly used at the top of utility panels like BoardItemsVisibility.
 */
const meta: Meta<typeof TabPanel> = {
  title: 'Layout/TabPanel',
  component: TabPanel,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      description: 'List of tab definitions. Each tab has an ID, name, and optional badge configuration.',
      control: 'object',
      table: {
        type: { summary: 'TabItem[]' },
      },
    },
    modelValue: {
      description: 'The ID of the currently active tab (v-model support).',
      control: 'text',
    },
  },
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    docs: {
      description: {
        component: 'The `TabPanel` component renders a horizontal list of tabs for navigation. It supports v-model for finding the active tab and can display notification badges on individual tabs.',
      },
    },
  },
  decorators: [
    () => ({
      template: `
        <div style="width: 300px; height: 400px; background: var(--afs-panel, #2c2c2e); border-radius: 8px; overflow: hidden; border: 1px solid var(--afs-border, #3c3c3e);">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultTabs = [
  { id: 'layers', name: 'Layers' },
  { id: 'objects', name: 'Objects' },
];

const tabsWithBadges = [
  { id: 'layers', name: 'Layers', badge: '12' },
  { id: 'objects', name: 'Objects', badge: '8', badgeType: 'accent' },
];

/**
 * **Default State**
 * 
 * Standard usage with text-only tabs.
 * Content is switched based on the active tab ID.
 */
export const Default: Story = {
  render: (args) => ({
    components: { TabPanel },
    setup() {
      const activeTab = ref('layers');
      return { args, activeTab };
    },
    template: `
      <TabPanel 
        :tabs="args.tabs" 
        v-model="activeTab"
      >
        <template #default="{ activeTab }">
          <div style="padding: 16px; color: var(--afs-text-icon-primary, #e5e7eb);">
            Active: {{ activeTab }}
          </div>
        </template>
      </TabPanel>
    `,
  }),
  args: {
    tabs: defaultTabs,
    modelValue: 'layers',
  },
};

/**
 * **With Badges**
 * 
 * Tabs can display badges to indicate counts or status.
 * This is useful for showing the number of active items in a category.
 */
export const WithBadges: Story = {
  render: (args) => ({
    components: { TabPanel },
    setup() {
      const activeTab = ref('layers');
      return { args, activeTab };
    },
    template: `
      <TabPanel 
        :tabs="args.tabs" 
        v-model="activeTab"
      >
        <template #default="{ activeTab }">
          <div style="padding: 16px; color: var(--afs-text-icon-primary, #e5e7eb);">
            {{ activeTab === 'layers' ? 'Showing 12 layers' : 'Showing 8 objects' }}
          </div>
        </template>
      </TabPanel>
    `,
  }),
  args: {
    tabs: tabsWithBadges,
    modelValue: 'layers',
  },
};

/**
 * **Interactive Demo**
 * 
 * Click on tabs to switch views.
 * Demonstrates internal content switching logic.
 */
export const Interactive: Story = {
  render: (args) => ({
    components: { TabPanel },
    setup() {
      const activeTab = ref('layers');
      return { args, activeTab };
    },
    template: `
      <TabPanel 
        :tabs="args.tabs" 
        v-model="activeTab"
      >
        <template #default="{ activeTab }">
          <div style="padding: 16px; color: var(--afs-text-icon-primary, #e5e7eb);">
            <div v-if="activeTab === 'layers'">
              <p>🔴 Top Copper</p>
              <p>🟢 Bottom Copper</p>
              <p>🔵 Silkscreen</p>
            </div>
            <div v-else>
              <p>📦 Pads</p>
              <p>📦 Vias</p>
              <p>📦 Tracks</p>
            </div>
          </div>
        </template>
      </TabPanel>
    `,
  }),
  args: {
    tabs: defaultTabs,
    modelValue: 'layers',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click Objects tab', async () => {
      const objectsTab = canvas.getByRole('button', { name: /objects/i });
      await userEvent.click(objectsTab);
      await expect(objectsTab).toHaveClass('is-active');
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Click Layers tab', async () => {
      const layersTab = canvas.getByRole('button', { name: /layers/i });
      await userEvent.click(layersTab);
      await expect(layersTab).toHaveClass('is-active');
      await new Promise(r => setTimeout(r, 300));
    });
  },
};
