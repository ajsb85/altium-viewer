import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { userEvent, within } from 'storybook/test';
import AppMenu from './AppMenu.vue';

/**
 * AppMenu - Context menu component
 *
 * Right-click context menu with keyboard shortcuts and icons.
 */
const meta: Meta<typeof AppMenu> = {
  title: 'Core/AppMenu',
  component: AppMenu,
  tags: ['autodocs'],
  argTypes: {
    isVisible: {
      description: 'Show/hide the menu',
      control: 'boolean',
    },
    x: {
      description: 'X position in pixels',
      control: 'number',
    },
    y: {
      description: 'Y position in pixels',
      control: 'number',
    },
    items: {
      description: 'Menu items array',
      control: 'object',
    },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems = [
  { id: 'copy', label: 'Copy', shortcut: '⌘C', icon: 'copy-16' },
  { id: 'paste', label: 'Paste', shortcut: '⌘V', icon: 'paste-16' },
  { id: 'sep1', separator: true },
  { id: 'zoom', label: 'Zoom to Fit', shortcut: 'F' },
  { id: 'reset', label: 'Reset View', shortcut: 'R' },
  { id: 'sep2', separator: true },
  { id: 'export', label: 'Export...', disabled: true },
];

/**
 * Default context menu
 */
export const Default: Story = {
  args: {
    isVisible: true,
    x: 100,
    y: 100,
    items: menuItems,
  },
};

/**
 * Interactive menu hover
 */
export const Interactive: Story = {
  args: {
    isVisible: true,
    x: 100,
    y: 50,
    items: menuItems,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Hover over Copy item', async () => {
      const copyItem = canvas.getByText('Copy');
      await userEvent.hover(copyItem);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Hover over Zoom to Fit', async () => {
      const zoomItem = canvas.getByText('Zoom to Fit');
      await userEvent.hover(zoomItem);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Click Reset View', async () => {
      const resetItem = canvas.getByText('Reset View');
      await userEvent.click(resetItem);
      await new Promise(r => setTimeout(r, 300));
    });
  },
};

/**
 * With disabled items
 */
export const WithDisabledItems: Story = {
  args: {
    isVisible: true,
    x: 100,
    y: 50,
    items: [
      { id: 'edit', label: 'Edit', disabled: false },
      { id: 'delete', label: 'Delete', disabled: true },
      { id: 'sep', separator: true },
      { id: 'settings', label: 'Settings', disabled: false },
    ],
  },
};

