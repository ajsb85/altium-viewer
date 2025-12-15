import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { userEvent, within, expect } from 'storybook/test';
import TabPanel from './TabPanel.vue';

/**
 * TabPanel - Tab Navigation Component
 *
 * Tab navigation for switching between views within a panel.
 * Used by BoardItemsVisibility for Layers/Objects tabs.
 */
const meta: Meta<typeof TabPanel> = {
  title: 'Layout/TabPanel',
  component: TabPanel,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      description: 'Array of tab definitions with id, name, and optional badge',
      control: 'object',
    },
    modelValue: {
      description: 'Currently active tab ID (v-model)',
      control: 'text',
    },
  },
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
  },
  decorators: [
    () => ({
      template: `
        <div style="width: 300px; height: 400px; background: var(--afs-panel, #2c2c2e); border-radius: 8px; overflow: hidden;">
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
 * Default tabs without badges
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
 * Tabs with badge counts
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
 * Interactive tab switching
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
    });

    await step('Click Layers tab', async () => {
      const layersTab = canvas.getByRole('button', { name: /layers/i });
      await userEvent.click(layersTab);
      await expect(layersTab).toHaveClass('is-active');
    });
  },
};
