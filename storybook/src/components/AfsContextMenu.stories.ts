import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { userEvent, within } from 'storybook/test';
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

import AfsIcon from './AfsIcon.vue';

/** Default context menu with realistic content */
export const Default: Story = {
  args: {
    borderRadius: 'all',
    minWidth: 220,
    maxHeight: 400,
  },
  render: (args) => ({
    components: { AfsContextMenu, AfsIcon },
    setup() {
      const menuRef = ref<InstanceType<typeof AfsContextMenu> | null>(null);
      const toggleMenu = () => menuRef.value?.toggle();
      return { args, menuRef, toggleMenu };
    },
    template: `
      <div style="min-height: 300px; display: flex; flex-direction: column; align-items: center; padding-top: 20px;">
        <div style="position: relative;">
          <button 
            @click.stop="toggleMenu" 
            style="
              padding: 8px 16px; 
              cursor: pointer; 
              background: var(--afs-button-primary, #0066cc); 
              color: white; 
              border: none; 
              border-radius: 4px;
              font-family: inherit;
              display: flex;
              align-items: center;
              gap: 8px;
            "
          >
            <AfsIcon name="settings-16" />
            <span>Options</span>
          </button>
          
          <AfsContextMenu ref="menuRef" v-bind="args" style="position: absolute; top: 100%; left: 0; margin-top: 4px;">
            <ul class="afs-context-menu__section">
              <li class="afs-context-menu__item">
                <button class="afs-context-menu__item-clickable afs-context-menu__item-in">
                  <span style="display: flex; align-items: center; gap: 8px;">
                    <AfsIcon name="visibility-16" style="color: var(--afs-icons, #6b7280);" />
                    <span>View Details</span>
                  </span>
                </button>
              </li>
              <li class="afs-context-menu__item">
                <button class="afs-context-menu__item-clickable afs-context-menu__item-in">
                  <span style="display: flex; align-items: center; gap: 8px;">
                    <AfsIcon name="share-16" style="color: var(--afs-icons, #6b7280);" />
                    <span>Share Project</span>
                  </span>
                </button>
              </li>
              <li class="afs-context-menu__item">
                <button class="afs-context-menu__item-clickable afs-context-menu__item-in">
                  <span style="display: flex; align-items: center; gap: 8px;">
                    <AfsIcon name="download-16" style="color: var(--afs-icons, #6b7280);" />
                    <span>Download Files</span>
                  </span>
                </button>
              </li>
            </ul>
          </AfsContextMenu>
        </div>
        <p style="margin-top: 200px; color: #666; font-size: 12px;">(Spacer to ensure menu visibility)</p>
      </div>
    `,
  }),
};

/** Menu with sections and specialized items */
export const WithSections: Story = {
  args: {
    borderRadius: 'all',
    minWidth: 240,
  },
  render: (args) => ({
    components: { AfsContextMenu, AfsIcon },
    setup() {
      const menuRef = ref<InstanceType<typeof AfsContextMenu> | null>(null);
      const toggleMenu = () => menuRef.value?.toggle();
      return { args, menuRef, toggleMenu };
    },
    template: `
      <div style="min-height: 400px; display: flex; flex-direction: column; align-items: center; padding-top: 20px;">
        <div style="position: relative;">
          <button 
            @click.stop="toggleMenu" 
            style="
              padding: 8px 16px; 
              cursor: pointer; 
              background: var(--afs-secondary-button, #f3f4f6); 
              border: 1px solid #d1d5db; 
              border-radius: 4px;
              display: flex;
              align-items: center;
              gap: 8px;
            "
          >
            <span>Click for Actions</span>
            <AfsIcon name="arrow-down-16" />
          </button>
          
          <AfsContextMenu ref="menuRef" v-bind="args" style="position: absolute; top: 100%; left: 0; margin-top: 4px;">
            <!-- Section 1: Navigation -->
            <ul class="afs-context-menu__section">
              <li class="afs-context-menu__item">
                <button class="afs-context-menu__item-clickable afs-context-menu__item-in">
                  <span style="display: flex; align-items: center; gap: 8px;">
                    <AfsIcon name="zoom-in-16" />
                    <span>Zoom In</span>
                    <span style="margin-left: auto; font-size: 10px; color: #9ca3af;">Ctrl++</span>
                  </span>
                </button>
              </li>
              <li class="afs-context-menu__item">
                <button class="afs-context-menu__item-clickable afs-context-menu__item-in">
                  <span style="display: flex; align-items: center; gap: 8px;">
                    <AfsIcon name="zoom-out-16" />
                    <span>Zoom Out</span>
                    <span style="margin-left: auto; font-size: 10px; color: #9ca3af;">Ctrl--</span>
                  </span>
                </button>
              </li>
            </ul>

            <!-- Section 2: Management -->
             <ul class="afs-context-menu__section">
              <li class="afs-context-menu__item">
                <button class="afs-context-menu__item-clickable afs-context-menu__item-in">
                  <span style="display: flex; align-items: center; gap: 8px;">
                    <AfsIcon name="folder-16" />
                    <span>Move to Folder...</span>
                  </span>
                </button>
              </li>
              <li class="afs-context-menu__item">
                <button class="afs-context-menu__item-clickable afs-context-menu__item-in" disabled>
                  <span style="display: flex; align-items: center; gap: 8px;">
                    <AfsIcon name="check-16" style="opacity: 0.5;" />
                    <span>Mark as Done</span>
                  </span>
                </button>
              </li>
            </ul>

            <!-- Section 3: Destructive -->
            <ul class="afs-context-menu__section">
              <li class="afs-context-menu__item">
                <button 
                  class="afs-context-menu__item-clickable afs-context-menu__item-in" 
                  style="color: var(--afs-error, #dc2626);"
                >
                  <span style="display: flex; align-items: center; gap: 8px;">
                    <AfsIcon name="close-16" style="color: inherit;" />
                    <span>Delete Item</span>
                  </span>
                </button>
              </li>
            </ul>
          </AfsContextMenu>
        </div>
      </div>
    `,
  }),
};

/** Interactive demo with verified click handling */
export const Interactive: Story = {
  args: {
    borderRadius: 'all',
    minWidth: 180,
  },
  render: (args) => ({
    components: { AfsContextMenu, AfsIcon },
    setup() {
      const menuRef = ref<InstanceType<typeof AfsContextMenu> | null>(null);
      const lastAction = ref<string>('None');
      
      const toggleMenu = () => menuRef.value?.toggle();
      const onAction = (action: string) => {
        lastAction.value = action;
        menuRef.value?.close();
      };
      
      return { args, menuRef, toggleMenu, onAction, lastAction };
    },
    template: `
      <div style="min-height: 250px; padding: 20px; display: flex; flex-direction: column; align-items: flex-start; gap: 20px;">
        <div style="padding: 10px; background: #f3f4f6; border-radius: 4px; width: 100%;">
          <strong>Last Action:</strong> 
          <span style="color: #0066cc; font-weight: bold;">{{ lastAction }}</span>
        </div>

        <div style="position: relative; display: inline-block;">
          <button 
            id="menu-trigger" 
            @click.stop="toggleMenu" 
            style="
              cursor: pointer; 
              padding: 8px 16px;
              background: white;
              border: 1px solid #d1d5db;
              border-radius: 4px;
              display: flex;
              align-items: center;
              gap: 8px;
            "
          >
            <span>Right Click Here / Click</span>
            <AfsIcon name="arrow-down-16" />
          </button>
          
          <AfsContextMenu ref="menuRef" v-bind="args" style="position: absolute; top: 100%; left: 0; z-index: 10; margin-top: 4px;">
            <ul class="afs-context-menu__section">
              <li class="afs-context-menu__item">
                <button @click="onAction('Copy')" class="afs-context-menu__item-clickable afs-context-menu__item-in">
                  <span style="display: flex; align-items: center; gap: 8px;">
                    <AfsIcon name="file-16" />
                    <span>Copy</span>
                  </span>
                </button>
              </li>
              <li class="afs-context-menu__item">
                <button @click="onAction('Paste')" class="afs-context-menu__item-clickable afs-context-menu__item-in">
                  <span style="display: flex; align-items: center; gap: 8px;">
                    <AfsIcon name="folder-16" />
                    <span>Paste</span>
                  </span>
                </button>
              </li>
              <li class="afs-context-menu__item" style="border-top: 1px solid #e5e7eb; margin-top: 4px; padding-top: 4px;">
                <button @click="onAction('Delete')" class="afs-context-menu__item-clickable afs-context-menu__item-in" style="color: #dc2626;">
                  <span style="display: flex; align-items: center; gap: 8px;">
                    <AfsIcon name="close-16" style="color: inherit;" />
                    <span>Delete</span>
                  </span>
                </button>
              </li>
            </ul>
          </AfsContextMenu>
        </div>
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click trigger to open menu', async () => {
      const trigger = canvas.getByText('Right Click Here / Click');
      await userEvent.click(trigger);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Verify menu items exist', async () => {
       // Just ensuring they render
       await canvas.findByText('Copy');
       await canvas.findByText('Delete');
    });

    await step('Click Copy action', async () => {
      const copyBtn = canvas.getByText('Copy');
      await userEvent.click(copyBtn);
      // Wait for UI update
      await new Promise(r => setTimeout(r, 200));
    });
    
    await step('Verify Copy action recorded', async () => {
      await canvas.findByText('Copy'); // Finds the text in the "Last Action" span
    });
  },
};

