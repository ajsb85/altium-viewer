import type { Meta, StoryObj } from '@storybook/vue3-vite';
import GridContainer from './GridContainer.vue';

/**
 * GridContainer - Layout Container Component
 *
 * Simple flexbox container for vertical layout.
 * Used as a wrapper for sidebar content.
 */
const meta: Meta<typeof GridContainer> = {
  title: 'Layout/GridContainer',
  component: GridContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Minimal layout wrapper that provides flex column container. From vendors.js (48226).G.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default container with slot content
 */
export const Default: Story = {
  render: () => ({
    components: { GridContainer },
    template: `
      <GridContainer style="height: 300px; background: var(--afs-panel, #2c2c2e);">
        <div style="padding: 16px; color: var(--afs-text-icon-primary, #e5e7eb);">
          <h3 style="margin: 0 0 8px;">Header Content</h3>
          <p style="margin: 0;">Body content inside GridContainer</p>
        </div>
        <div style="flex: 1; padding: 16px; background: var(--afs-group, #3c3c3e); color: var(--afs-text-icon-secondary, #9ca3af);">
          Flexible middle section
        </div>
        <div style="padding: 16px; border-top: 1px solid var(--afs-border, #4c4c4e); color: var(--afs-text-icon-hint, #6b7280);">
          Footer content
        </div>
      </GridContainer>
    `,
  }),
};

/**
 * With sidebar-like content
 */
export const SidebarLayout: Story = {
  render: () => ({
    components: { GridContainer },
    template: `
      <GridContainer style="width: 240px; height: 400px; background: var(--afs-sidebar, #1c1c1e);">
        <div style="padding: 12px; border-bottom: 1px solid var(--afs-border, #3c3c3e);">
          <input 
            type="text" 
            placeholder="Search..." 
            style="width: 100%; padding: 8px; border: 1px solid var(--afs-border, #3c3c3e); border-radius: 4px; background: var(--afs-input-bg, #2c2c2e); color: var(--afs-text-icon-primary, #e5e7eb);"
          />
        </div>
        <div style="flex: 1; overflow-y: auto; padding: 8px 0;">
          <div v-for="i in 10" :key="i" style="padding: 10px 12px; color: var(--afs-text-icon-primary, #e5e7eb); cursor: pointer;">
            Item {{ i }}
          </div>
        </div>
      </GridContainer>
    `,
  }),
};
