import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppBoardItemsVisibility from './AppBoardItemsVisibility.vue';

const meta: Meta<typeof AppBoardItemsVisibility> = {
  title: 'Plugins/AppBoardItemsVisibility',
  component: AppBoardItemsVisibility,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 240px; height: 400px;"><story /></div>',
  })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { viewMode: 'top', activeTab: 'layers' },
  render: (args) => ({
    components: { AppBoardItemsVisibility },
    setup() { return { args }; },
    template: `
      <AppBoardItemsVisibility v-bind="args">
        <div style="padding: 12px; color: var(--afs-text-icon-secondary);">
          Layer list content here...
        </div>
      </AppBoardItemsVisibility>
    `,
  }),
};

export const ObjectsTab: Story = {
  args: { viewMode: 'top', activeTab: 'objects' },
};

/**
 * **Interactive Demo**
 * 
 * Simulated interaction switching between Layers and Objects tabs.
 */
export const Interactive: Story = {
  render: () => ({
    components: { AppBoardItemsVisibility },
    setup() {
      const { ref } = require('vue');
      const activeTab = ref('layers');
      const viewMode = ref('top');
      
      const handleTabChange = (tabId: string) => {
        activeTab.value = tabId;
      };
      
      const handleViewChange = (mode: string) => {
        viewMode.value = mode;
      };
      
      return { activeTab, viewMode, handleTabChange, handleViewChange };
    },
    template: `
      <AppBoardItemsVisibility 
        :viewMode="viewMode" 
        :activeTab="activeTab"
        @update:activeTab="handleTabChange"
        @update:viewMode="handleViewChange"
      >
        <div style="padding: 16px; color: var(--afs-text-icon-secondary);">
          <div v-if="activeTab === 'layers'">
            <p style="color: var(--afs-text-icon-primary)">Layers Panel Content</p>
            <p>Layer list would be here...</p>
          </div>
          <div v-else>
            <p style="color: var(--afs-text-icon-primary)">Objects Panel Content</p>
            <p>Object list would be here...</p>
          </div>
        </div>
      </AppBoardItemsVisibility>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const { userEvent, within, expect } = require('storybook/test');
    const canvas = within(canvasElement);

    await step('Switch to Objects tab', async () => {
      const objectsTab = canvas.getByRole('button', { name: /objects/i });
      await userEvent.click(objectsTab);
      await expect(objectsTab).toHaveClass('is-active');
      await new Promise(r => setTimeout(r, 500));
    });

    await step('Switch back to Layers tab', async () => {
      const layersTab = canvas.getByRole('button', { name: /layers/i });
      await userEvent.click(layersTab);
      await expect(layersTab).toHaveClass('is-active');
      await new Promise(r => setTimeout(r, 500));
    });
  }
};
