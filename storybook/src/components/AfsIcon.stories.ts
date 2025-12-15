import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AfsIcon from './AfsIcon.vue';

/**
 * AfsIcon - SVG Icon Component
 * 
 * Core icon component used throughout the Altium Viewer.
 * Uses SVG sprite sheet for efficient icon loading.
 * 
 * Production CSS: production.css:38215-38219
 */
const meta: Meta<typeof AfsIcon> = {
  title: 'Core/AfsIcon',
  component: AfsIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="font-size: 24px; color: var(--afs-text-icon-primary, #fff);"><story /></div>',
  })],
  argTypes: {
    name: {
      description: 'Icon name from the sprite sheet (e.g., "pcb-16", "schematic-16")',
      control: 'select',
      options: [
        'pcb-16',
        'schematic-16',
        'folder-16',
        'file-16',
        'search-16',
        'settings-16',
        'close-16',
        'arrow-down-16',
        'arrow-up-16',
        'arrow-left-16',
        'arrow-right-16',
        'check-16',
        'plus-16',
        'minus-16',
        'layers-16',
        'visibility-16',
        'visibility-off-16',
        'zoom-in-16',
        'zoom-out-16',
        'fullscreen-16',
        'download-16',
        'share-16',
        'help-16',
        'image-broken-16',
      ],
      table: { category: 'Content' },
    },
    filled: {
      description: 'Apply filled/highlight style (primary color)',
      control: 'boolean',
      table: { category: 'Appearance' },
    },
  },
  args: {
    name: 'pcb-16',
    filled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default icon at 24px (inherited from parent font-size)
 */
export const Default: Story = {
  args: { name: 'pcb-16' },
};

/**
 * Filled/highlighted state
 */
export const Filled: Story = {
  args: { name: 'pcb-16', filled: true },
};

/**
 * Icon sizes - controlled by parent font-size
 */
export const Sizes: Story = {
  render: () => ({
    components: { AfsIcon },
    template: `
      <div style="display: flex; align-items: center; gap: 16px; color: var(--afs-text-icon-primary, #fff);">
        <span style="font-size: 12px;"><AfsIcon name="pcb-16" /> 12px</span>
        <span style="font-size: 16px;"><AfsIcon name="pcb-16" /> 16px</span>
        <span style="font-size: 24px;"><AfsIcon name="pcb-16" /> 24px</span>
        <span style="font-size: 32px;"><AfsIcon name="pcb-16" /> 32px</span>
        <span style="font-size: 48px;"><AfsIcon name="pcb-16" /> 48px</span>
      </div>
    `,
  }),
};

/**
 * Icon gallery showing available icons
 */
export const Gallery: Story = {
  render: () => ({
    components: { AfsIcon },
    setup() {
      const icons = [
        'pcb-16', 'schematic-16', 'folder-16', 'file-16',
        'search-16', 'settings-16', 'close-16',
        'arrow-down-16', 'arrow-up-16', 'arrow-left-16', 'arrow-right-16',
        'check-16', 'plus-16', 'minus-16',
        'layers-16', 'visibility-16', 'visibility-off-16',
        'zoom-in-16', 'zoom-out-16', 'fullscreen-16',
        'download-16', 'share-16', 'help-16',
      ];
      return { icons };
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; font-size: 24px; color: var(--afs-text-icon-primary, #fff);">
        <div v-for="icon in icons" :key="icon" style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <AfsIcon :name="icon" />
          <span style="font-size: 10px; opacity: 0.6;">{{ icon }}</span>
        </div>
      </div>
    `,
  }),
};

/**
 * Icons with different colors
 */
export const Colors: Story = {
  render: () => ({
    components: { AfsIcon },
    template: `
      <div style="display: flex; gap: 16px; font-size: 24px;">
        <span style="color: #fff;"><AfsIcon name="pcb-16" /> White</span>
        <span style="color: #0a84ff;"><AfsIcon name="pcb-16" /> Primary</span>
        <span style="color: #30d158;"><AfsIcon name="pcb-16" /> Success</span>
        <span style="color: #ff453a;"><AfsIcon name="pcb-16" /> Error</span>
        <span style="color: #ffd60a;"><AfsIcon name="pcb-16" /> Warning</span>
      </div>
    `,
  }),
};
