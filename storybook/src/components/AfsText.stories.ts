import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AfsText from './AfsText.vue';

/**
 * AfsText - Typography Component
 *
 * Provides consistent typography styles across the application.
 * Supports various text types from large titles to hints.
 */
const meta: Meta<typeof AfsText> = {
  title: 'Core/AfsText',
  component: AfsText,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Typography style variant',
      control: 'select',
      options: ['large title', 'medium title', 'title', 'paragraph', 'single line', 'hint', 'tooltip', 'group', 'sticker', 'text'],
    },
    inline: {
      description: 'Render as inline span instead of block div',
      control: 'boolean',
    },
    ellipsis: {
      description: 'Truncate text with ellipsis',
      control: 'boolean',
    },
    tag: {
      description: 'Override HTML element (e.g., "h1", "p")',
      control: 'text',
    },
  },
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    docs: {
      description: {
        component: 'Typography component with BEM-based styling for consistent text presentation.',
      },
    },
  },
  decorators: [
    () => ({
      template: `
        <div style="color: var(--afs-text-icon-primary, #e5e7eb); padding: 16px;">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Large title - Used for main headings
 */
export const LargeTitle: Story = {
  args: {
    type: 'large title',
  },
  render: (args) => ({
    components: { AfsText },
    setup() { return { args }; },
    template: '<AfsText v-bind="args">Large Title Text</AfsText>',
  }),
};

/**
 * Medium title - Used for section headings
 */
export const MediumTitle: Story = {
  args: {
    type: 'medium title',
  },
  render: (args) => ({
    components: { AfsText },
    setup() { return { args }; },
    template: '<AfsText v-bind="args">Medium Title Text</AfsText>',
  }),
};

/**
 * Title - Used for subsection headings
 */
export const Title: Story = {
  args: {
    type: 'title',
  },
  render: (args) => ({
    components: { AfsText },
    setup() { return { args }; },
    template: '<AfsText v-bind="args">Title Text</AfsText>',
  }),
};

/**
 * Paragraph - Default body text
 */
export const Paragraph: Story = {
  args: {
    type: 'paragraph',
  },
  render: (args) => ({
    components: { AfsText },
    setup() { return { args }; },
    template: '<AfsText v-bind="args">This is a paragraph of text. It uses the standard body font size and line height for comfortable reading.</AfsText>',
  }),
};

/**
 * Single line - Truncated text with ellipsis
 */
export const SingleLine: Story = {
  args: {
    type: 'single line',
  },
  render: (args) => ({
    components: { AfsText },
    setup() { return { args }; },
    template: '<div style="width: 200px;"><AfsText v-bind="args">This is a very long single line of text that will be truncated with ellipsis</AfsText></div>',
  }),
};

/**
 * Hint - Small helper text
 */
export const Hint: Story = {
  args: {
    type: 'hint',
  },
  render: (args) => ({
    components: { AfsText },
    setup() { return { args }; },
    template: '<AfsText v-bind="args">Hint text for additional context</AfsText>',
  }),
};

/**
 * All types comparison
 */
export const AllTypes: Story = {
  render: () => ({
    components: { AfsText },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <AfsText type="large title">Large Title</AfsText>
        <AfsText type="medium title">Medium Title</AfsText>
        <AfsText type="title">Title</AfsText>
        <AfsText type="paragraph">Paragraph text with normal body styling</AfsText>
        <AfsText type="hint">Hint/tooltip text</AfsText>
        <AfsText type="group">Group label</AfsText>
        <AfsText type="sticker">Sticker text</AfsText>
      </div>
    `,
  }),
};

/**
 * Inline usage
 */
export const InlineText: Story = {
  args: {
    inline: true,
    type: 'paragraph',
  },
  render: (args) => ({
    components: { AfsText },
    setup() { return { args }; },
    template: '<p>This uses <AfsText v-bind="args" type="title">inline title</AfsText> within a paragraph.</p>',
  }),
};

/**
 * With ellipsis
 */
export const WithEllipsis: Story = {
  args: {
    ellipsis: true,
    type: 'paragraph',
  },
  render: (args) => ({
    components: { AfsText },
    setup() { return { args }; },
    template: '<div style="width: 150px;"><AfsText v-bind="args">Very long text that needs ellipsis truncation</AfsText></div>',
  }),
};
