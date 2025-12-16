import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { userEvent, within, expect } from 'storybook/test';
import AppMainTabs from './AppMainTabs.vue';

/**
 * AppMainTabs - Main navigation tabs component
 *
 * Horizontal tabs for switching between major application views.
 */
const meta: Meta<typeof AppMainTabs> = {
  title: 'Components/AppMainTabs',
  component: AppMainTabs,
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of tab items with id, text, icon, isActive, and optional beta flag',
      control: 'object',
    },
  },
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
  },
  decorators: [
    () => ({
      template: `
        <div style="background: var(--afs-background, #1c1c1e); padding: 16px;">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
  { id: 'tab1', text: 'Dashboard', icon: 'file-upload-32', isActive: true },
  { id: 'tab2', text: 'Settings', icon: 'settings', isActive: false },
  { id: 'tab3', text: 'Beta Feature', beta: true, isActive: false },
];

/**
 * Default tabs with one active
 */
export const Default: Story = {
  args: {
    items: mockItems,
  },
};

/**
 * With dropdown menus
 */
export const WithDropdowns: Story = {
  args: {
    items: [
      { id: 'tab1', text: 'Home', isActive: true },
      {
        id: 'tab2',
        text: 'Menu',
        icon: 'menu',
        displayItems: [
          { text: 'Sub Item 1', icon: 'check' },
          { text: 'Sub Item 2' },
        ],
      },
    ],
  },
};

/**
 * Interactive tab switching
 */
export const Interactive: Story = {
  render: (args) => ({
    components: { AppMainTabs },
    setup() {
      const items = ref([...mockItems]);

      const handleTabClick = (tabId: string) => {
        items.value = items.value.map(item => ({
          ...item,
          isActive: item.id === tabId,
        }));
      };

      return { args, items, handleTabClick };
    },
    template: `
      <AppMainTabs :items="items" @tab-click="handleTabClick" />
    `,
  }),
  args: {
    items: mockItems,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click Settings tab', async () => {
      const settingsTab = canvas.getByText('Settings');
      await userEvent.click(settingsTab);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Click Beta Feature tab', async () => {
      const betaTab = canvas.getByText('Beta Feature');
      await userEvent.click(betaTab);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Click Dashboard tab', async () => {
      const dashboardTab = canvas.getByText('Dashboard');
      await userEvent.click(dashboardTab);
      await new Promise(r => setTimeout(r, 300));
    });
  },
};

