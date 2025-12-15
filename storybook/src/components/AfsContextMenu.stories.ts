import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import AfsContextMenu from './AfsContextMenu.vue';

/**
 * AfsContextMenu - Context menu/dropdown component
 * 
 * @see vendors.js AfsContextMenu component
 * @see scss/components/afs-context.scss
 */
const meta: Meta<typeof AfsContextMenu> = {
  title: 'Overlays/AfsContextMenu',
  component: AfsContextMenu,
  tags: ['autodocs'],
  argTypes: {
    arrow: {
      control: 'boolean',
      description: 'Show arrow pointer',
    },
    borderRadius: {
      control: 'select',
      options: ['all', 'top', 'bottom', 'none'],
      description: 'Border radius options',
    },
    maxHeight: {
      control: 'number',
      description: 'Maximum height in pixels',
    },
    minWidth: {
      control: 'number',
      description: 'Minimum width in pixels',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Default context menu */
export const Default: Story = {
  args: {
    borderRadius: 'all',
    minWidth: 180,
    maxHeight: 400,
  },
  render: (args) => ({
    components: { AfsContextMenu },
    setup() {
      const menuRef = ref<InstanceType<typeof AfsContextMenu> | null>(null);
      const toggleMenu = () => menuRef.value?.toggle();
      return { args, menuRef, toggleMenu };
    },
    template: `
      <div style="position: relative;">
        <button @click="toggleMenu" style="padding: 8px 16px; cursor: pointer;">
          Open Menu
        </button>
        <AfsContextMenu ref="menuRef" v-bind="args" style="position: absolute; top: 100%; left: 0;">
          <li class="afs-context-menu__item">
            <button class="afs-context-menu__item-clickable afs-context-menu__item-in">
              Option 1
            </button>
          </li>
          <li class="afs-context-menu__item">
            <button class="afs-context-menu__item-clickable afs-context-menu__item-in">
              Option 2
            </button>
          </li>
          <li class="afs-context-menu__item">
            <button class="afs-context-menu__item-clickable afs-context-menu__item-in" disabled>
              Disabled
            </button>
          </li>
        </AfsContextMenu>
      </div>
    `,
  }),
};

/** Menu with sections */
export const WithSections: Story = {
  args: {
    borderRadius: 'all',
    minWidth: 200,
  },
  render: (args) => ({
    components: { AfsContextMenu },
    setup() {
      const menuRef = ref<InstanceType<typeof AfsContextMenu> | null>(null);
      const toggleMenu = () => menuRef.value?.toggle();
      return { args, menuRef, toggleMenu };
    },
    template: `
      <div style="position: relative;">
        <button @click="toggleMenu" style="padding: 8px 16px; cursor: pointer;">
          Actions Menu
        </button>
        <AfsContextMenu ref="menuRef" v-bind="args" style="position: absolute; top: 100%; left: 0;">
          <li class="afs-context-menu__item">
            <button class="afs-context-menu__item-clickable afs-context-menu__item-in">
              Edit
            </button>
          </li>
          <li class="afs-context-menu__item">
            <button class="afs-context-menu__item-clickable afs-context-menu__item-in">
              Duplicate
            </button>
          </li>
          <li class="afs-context-menu__item" style="border-top: 1px solid #e5e7eb; margin-top: 8px; padding-top: 8px;">
            <button class="afs-context-menu__item-clickable afs-context-menu__item-in" style="color: #dc2626;">
              Delete
            </button>
          </li>
        </AfsContextMenu>
      </div>
    `,
  }),
};
