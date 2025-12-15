import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppMenu from './AppMenu.vue';

const meta: Meta<typeof AppMenu> = {
  title: 'Core/AppMenu',
  component: AppMenu,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isVisible: true,
    x: 100,
    y: 100,
    items: [
      { id: 'copy', label: 'Copy', shortcut: '⌘C', icon: 'copy-16' },
      { id: 'paste', label: 'Paste', shortcut: '⌘V', icon: 'paste-16' },
      { id: 'sep1', separator: true },
      { id: 'zoom', label: 'Zoom to Fit', shortcut: 'F' },
      { id: 'reset', label: 'Reset View', shortcut: 'R' },
      { id: 'sep2', separator: true },
      { id: 'export', label: 'Export...', disabled: true },
    ],
  },
};
