import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AfsTypography from './AfsTypography.vue';

/**
 * AfsTypography - Production Typography Component
 * 
 * Provides consistent typography styles across the application.
 * Production CSS from production.css:8224-8284
 */
const meta: Meta<typeof AfsTypography> = {
  title: 'Components/AfsTypography',
  component: AfsTypography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Typography variant determining size, weight, and line-height',
      control: { type: 'select' },
      options: [
        'large-title',
        'medium-title',
        'title',
        'paragraph',
        'single-line',
        'hint-tooltip',
        'group',
        'sticker',
        'text',
      ],
    },
    as: {
      description: 'HTML element to render',
      control: { type: 'select' },
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'div', 'a', 'label'],
    },
    ellipsis: {
      description: 'Apply text ellipsis for overflow',
      control: 'boolean',
    },
    default: {
      description: 'Text content',
      control: 'text',
      table: { category: 'Slots' },
    },
  },
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    docs: {
      description: {
        component: 'Typography component with predefined text styles matching the production design system.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default text variant
 */
export const Default: Story = {
  args: {
    variant: 'text',
    as: 'span',
  },
  render: (args) => ({
    components: { AfsTypography },
    setup() { return { args }; },
    template: '<AfsTypography v-bind="args">Default text content</AfsTypography>',
  }),
};

/**
 * Large title - 16px, 500 weight
 */
export const LargeTitle: Story = {
  args: {
    variant: 'large-title',
    as: 'h1',
  },
  render: (args) => ({
    components: { AfsTypography },
    setup() { return { args }; },
    template: '<AfsTypography v-bind="args">Large Title - Component Library</AfsTypography>',
  }),
};

/**
 * Medium title - 14px, 500 weight
 */
export const MediumTitle: Story = {
  args: {
    variant: 'medium-title',
    as: 'h2',
  },
  render: (args) => ({
    components: { AfsTypography },
    setup() { return { args }; },
    template: '<AfsTypography v-bind="args">Medium Title - Section Header</AfsTypography>',
  }),
};

/**
 * Title - 12px, 500 weight
 */
export const Title: Story = {
  args: {
    variant: 'title',
    as: 'h3',
  },
  render: (args) => ({
    components: { AfsTypography },
    setup() { return { args }; },
    template: '<AfsTypography v-bind="args">Title - Subsection</AfsTypography>',
  }),
};

/**
 * Paragraph - 12px, 400 weight
 */
export const Paragraph: Story = {
  args: {
    variant: 'paragraph',
    as: 'p',
  },
  render: (args) => ({
    components: { AfsTypography },
    setup() { return { args }; },
    template: '<AfsTypography v-bind="args">This is a paragraph of text that provides detailed information about the component or feature being described. It uses the default body text styling.</AfsTypography>',
  }),
};

/**
 * Hint tooltip - 11px, smallest text
 */
export const HintTooltip: Story = {
  args: {
    variant: 'hint-tooltip',
    as: 'span',
  },
  render: (args) => ({
    components: { AfsTypography },
    setup() { return { args }; },
    template: '<AfsTypography v-bind="args">Hint: Press Ctrl+S to save</AfsTypography>',
  }),
};

/**
 * Group label - 10px, uppercase, letter-spacing
 */
export const Group: Story = {
  args: {
    variant: 'group',
    as: 'span',
  },
  render: (args) => ({
    components: { AfsTypography },
    setup() { return { args }; },
    template: '<AfsTypography v-bind="args">Layer Group</AfsTypography>',
  }),
};

/**
 * Sticker - 8px, smallest, bold, uppercase
 */
export const Sticker: Story = {
  args: {
    variant: 'sticker',
    as: 'span',
  },
  render: (args) => ({
    components: { AfsTypography },
    setup() { return { args }; },
    template: '<AfsTypography v-bind="args">NEW</AfsTypography>',
  }),
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  render: () => ({
    components: { AfsTypography },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: baseline; gap: 16px;">
          <span style="width: 120px; color: rgba(255,255,255,0.5); font-size: 11px;">large-title</span>
          <AfsTypography variant="large-title">Large Title Text</AfsTypography>
        </div>
        <div style="display: flex; align-items: baseline; gap: 16px;">
          <span style="width: 120px; color: rgba(255,255,255,0.5); font-size: 11px;">medium-title</span>
          <AfsTypography variant="medium-title">Medium Title Text</AfsTypography>
        </div>
        <div style="display: flex; align-items: baseline; gap: 16px;">
          <span style="width: 120px; color: rgba(255,255,255,0.5); font-size: 11px;">title</span>
          <AfsTypography variant="title">Title Text</AfsTypography>
        </div>
        <div style="display: flex; align-items: baseline; gap: 16px;">
          <span style="width: 120px; color: rgba(255,255,255,0.5); font-size: 11px;">paragraph</span>
          <AfsTypography variant="paragraph">Paragraph text content</AfsTypography>
        </div>
        <div style="display: flex; align-items: baseline; gap: 16px;">
          <span style="width: 120px; color: rgba(255,255,255,0.5); font-size: 11px;">single-line</span>
          <AfsTypography variant="single-line">Single line text</AfsTypography>
        </div>
        <div style="display: flex; align-items: baseline; gap: 16px;">
          <span style="width: 120px; color: rgba(255,255,255,0.5); font-size: 11px;">text</span>
          <AfsTypography variant="text">Default text style</AfsTypography>
        </div>
        <div style="display: flex; align-items: baseline; gap: 16px;">
          <span style="width: 120px; color: rgba(255,255,255,0.5); font-size: 11px;">hint-tooltip</span>
          <AfsTypography variant="hint-tooltip">Hint tooltip text</AfsTypography>
        </div>
        <div style="display: flex; align-items: baseline; gap: 16px;">
          <span style="width: 120px; color: rgba(255,255,255,0.5); font-size: 11px;">group</span>
          <AfsTypography variant="group">GROUP LABEL</AfsTypography>
        </div>
        <div style="display: flex; align-items: baseline; gap: 16px;">
          <span style="width: 120px; color: rgba(255,255,255,0.5); font-size: 11px;">sticker</span>
          <AfsTypography variant="sticker">STICKER</AfsTypography>
        </div>
      </div>
    `,
  }),
};

/**
 * Typography with ellipsis
 */
export const WithEllipsis: Story = {
  decorators: [
    () => ({
      template: '<div style="width: 200px;"><story /></div>',
    }),
  ],
  render: () => ({
    components: { AfsTypography },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <AfsTypography variant="title" ellipsis>
          This is a very long title that will be truncated with ellipsis
        </AfsTypography>
        <AfsTypography variant="paragraph" ellipsis>
          This is a very long paragraph that will be truncated with ellipsis at the end
        </AfsTypography>
      </div>
    `,
  }),
};

/**
 * In context - Panel header
 */
export const PanelHeader: Story = {
  render: () => ({
    components: { AfsTypography },
    template: `
      <div style="background: var(--background-secondary, #2c2c2e); padding: 16px; border-radius: 8px;">
        <AfsTypography variant="group" style="color: rgba(255,255,255,0.5); margin-bottom: 8px;">
          SIGNAL LAYERS
        </AfsTypography>
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <AfsTypography variant="title">Top Layer</AfsTypography>
          <AfsTypography variant="text" style="color: rgba(255,255,255,0.6);">Copper layer for signals</AfsTypography>
        </div>
      </div>
    `,
  }),
};

/**
 * In context - Component info
 */
export const ComponentInfo: Story = {
  render: () => ({
    components: { AfsTypography },
    template: `
      <div style="background: var(--background-control, rgba(255,255,255,0.05)); padding: 12px; border-radius: 4px;">
        <AfsTypography variant="medium-title" style="margin-bottom: 4px;">STM32L452CEU6</AfsTypography>
        <AfsTypography variant="paragraph" style="color: rgba(255,255,255,0.6); margin-bottom: 8px;">
          ARM® Cortex®-M4 MCU, 512KB Flash, 48-UFQFPN
        </AfsTypography>
        <div style="display: flex; gap: 8px; align-items: center;">
          <AfsTypography variant="sticker" style="background: #0a84ff; color: white; padding: 2px 6px; border-radius: 4px;">
            IC
          </AfsTypography>
          <AfsTypography variant="hint-tooltip" style="color: rgba(255,255,255,0.4);">
            $1.05 / unit
          </AfsTypography>
        </div>
      </div>
    `,
  }),
};

/**
 * Font sizes comparison
 */
export const FontSizes: Story = {
  render: () => ({
    components: { AfsTypography },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <code style="width: 50px; font-size: 10px; color: rgba(255,255,255,0.4);">16px</code>
          <AfsTypography variant="large-title">Large Title</AfsTypography>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <code style="width: 50px; font-size: 10px; color: rgba(255,255,255,0.4);">14px</code>
          <AfsTypography variant="medium-title">Medium Title</AfsTypography>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <code style="width: 50px; font-size: 10px; color: rgba(255,255,255,0.4);">12px</code>
          <AfsTypography variant="title">Title / Paragraph / Text</AfsTypography>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <code style="width: 50px; font-size: 10px; color: rgba(255,255,255,0.4);">11px</code>
          <AfsTypography variant="hint-tooltip">Hint Tooltip</AfsTypography>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <code style="width: 50px; font-size: 10px; color: rgba(255,255,255,0.4);">10px</code>
          <AfsTypography variant="group">GROUP LABEL</AfsTypography>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <code style="width: 50px; font-size: 10px; color: rgba(255,255,255,0.4);">8px</code>
          <AfsTypography variant="sticker">STICKER</AfsTypography>
        </div>
      </div>
    `,
  }),
};
