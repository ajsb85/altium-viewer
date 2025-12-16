import type { Meta, StoryObj } from '@storybook/vue3';
import AppHeader from './AppHeader.vue';
import AppMainTabs from './AppMainTabs.vue';
import AppHeaderPlugin from './AppHeaderPlugin.vue';
import AfsIcon from './AfsIcon.vue';

const meta = {
  title: 'Components/AppHeader',
  component: AppHeader,
  tags: ['autodocs'],
  argTypes: {
    views: { control: 'object' },
    globalPlugins: { control: 'object' },
    localPlugins: { control: 'object' },
  },
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockViews = [
  { id: 'pcb', text: 'PCB', icon: 'layer', isActive: true },
  { id: 'sch', text: 'Schematic', icon: 'file', isActive: false },
  { id: 'bom', text: 'BOM', icon: 'list', isActive: false },
];

const mockGlobalPlugins = [
  { id: 'search', icon: 'search', hasButton: true },
  { id: 'help', icon: 'help', hasButton: true },
];

const mockLocalPlugins = [
  { id: 'layers', text: 'Layers', icon: 'layers', localType: 'primary', hasButton: true },
  { id: 'settings', icon: 'settings', localType: 'secondary', hasButton: true },
];

export const Default: Story = {
  args: {
    views: mockViews,
    globalPlugins: mockGlobalPlugins,
    localPlugins: mockLocalPlugins,
  },
};

/**
 * Production Header Demo
 * Replicates the full application header layout with Project selection, View tabs, and Action plugins.
 * Uses a manual 3-column layout to match specific production requirements.
 */
export const ProductionHeader: Story = {
  render: () => ({
    components: { AppMainTabs, AppHeaderPlugin, AfsIcon },
    setup() {
      // Center Tabs
      const centerViews = [
        { id: 'sch', text: 'SCH', isActive: true },
        { id: 'stackup', text: 'Stackup', isActive: false, beta: true, betaText: 'new' }, // hidden in snippet but present in DOM
        { id: 'pcb', text: 'PCB', isActive: false },
        { id: '3d', text: '3D', isActive: false },
        { id: 'bom', text: 'BOM', isActive: false },
      ];

      // Right Side Plugins (Group 1: Comments)
      const commentPlugins = [
        { id: 'comments', icon: 'comments', hasButton: true }, // Verified sprite name
      ];

      // Right Side Plugins (Group 2: Tools)
      // Icons mapped from user snippet (viewer-X) to actual sprite names (checked via grep)
      const toolPlugins = [
        { id: 'search', icon: 'search-16', hasButton: true },
        { id: 'help', icon: 'info-12', hasButton: true, filled: true }, // filled prop enables svg-sprite-filled-- prefix
        { id: 'download', icon: 'download-16', hasButton: true },
        { id: 'fullscreen', icon: 'fullscreen-16', hasButton: true },
      ];

      return { centerViews, commentPlugins, toolPlugins };
    },
    template: `
      <header class="app-header app__header" style="display: flex; justify-content: space-between; align-items: stretch; background: #fff; border-bottom: 1px solid #e5e7eb; padding: 0 16px; height: 48px;">
        
        <!-- LEFT COL: Project Selector -->
        <div class="app-header__col app-header__secondary-controls" style="display: flex; align-items: center; width: 33%;">
          <div class="app-header-plugins">
            <button type="button" class="app-header-plugins__btn" style="display: flex; align-items: center; gap: 8px; background: none; border: none; cursor: pointer; color: #374151; font-weight: 500; font-size: 14px; padding: 4px 8px; border-radius: 6px;">
              <AfsIcon name="schematic-16" />
              <span>[3] 3_pdb_conn</span>
              <AfsIcon name="chevron-down-8" />
            </button>
          </div>
        </div>

        <!-- CENTER COL: Main Tabs -->
        <div class="app-header__col app-header__view-controls" style="display: flex; align-items: center; justify-content: center; width: 34%;">
          <AppMainTabs :items="centerViews" />
        </div>

        <!-- RIGHT COL: Primary Controls -->
        <div class="app-header__col app-header__primary-controls" style="display: flex; align-items: center; justify-content: flex-end; width: 33%; gap: 8px;">
          <!-- Comment Group -->
          <div class="app-header-plugins" style="display: flex;">
            <AppHeaderPlugin 
              v-for="p in commentPlugins" 
              :key="p.id" 
              :icon="p.icon" 
              :label="p.text"
              class="app-header-plugins__btn"
            />
          </div>
          
          <!-- Separator -->
          <div style="width: 1px; height: 24px; background: #e5e7eb;"></div>

          <!-- Tools Group -->
          <div class="app-header-plugins" style="display: flex;">
            <AppHeaderPlugin 
              v-for="p in toolPlugins" 
              :key="p.id" 
              :icon="p.icon" 
              :label="p.text"
              :isActive="p.filled"
              class="app-header-plugins__btn"
            />
          </div>
        </div>

      </header>
    `,
  }),
};
