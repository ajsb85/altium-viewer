import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, within } from 'storybook/test';
import AfsBadge from './AfsBadge.vue';

/**
 * AfsBadge - Badge/chip component for labels and status indicators
 * 
 * Used for status labels, category tags, and feature flags.
 * 
 * @see vendors.js AfsBadge component
 * @see scss/components/afs-badge*.scss
 */
const meta: Meta<typeof AfsBadge> = {
  title: 'Data Display/AfsBadge',
  component: AfsBadge,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['', 'base', 'pro', 'success', 'alpha', 'new', 'guest'],
      description: 'Badge type/color variant',
    },
    size: {
      control: 'select',
      options: ['', 'xs', 'small', 'middle'],
      description: 'Badge size',
    },
    uppercase: {
      control: 'boolean',
      description: 'Transform text to uppercase',
    },
    tag: {
      control: 'text',
      description: 'HTML tag to render',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Default badge with interaction test */
export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { AfsBadge },
    setup: () => ({ args }),
    template: '<AfsBadge v-bind="args">Badge</AfsBadge>',
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText('Badge');
    await expect(badge).toBeInTheDocument();
    await expect(badge).toHaveClass('afs-badge');
  },
};

/** All type variants */
export const TypeVariants: Story = {
  render: () => ({
    components: { AfsBadge },
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <AfsBadge>Default</AfsBadge>
        <AfsBadge type="base">Base</AfsBadge>
        <AfsBadge type="pro">Pro</AfsBadge>
        <AfsBadge type="success">Success</AfsBadge>
        <AfsBadge type="alpha">Alpha</AfsBadge>
        <AfsBadge type="new">New</AfsBadge>
        <AfsBadge type="guest">Guest</AfsBadge>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Verify all type variants render
    await expect(canvas.getByText('Pro')).toHaveClass('afs-badge_pro');
    await expect(canvas.getByText('Success')).toHaveClass('afs-badge_success');
  },
};

/** All size variants */
export const SizeVariants: Story = {
  render: () => ({
    components: { AfsBadge },
    template: `
      <div style="display: flex; gap: 8px; align-items: center;">
        <AfsBadge size="xs">XS</AfsBadge>
        <AfsBadge size="small">Small</AfsBadge>
        <AfsBadge>Default</AfsBadge>
        <AfsBadge size="middle">Middle</AfsBadge>
      </div>
    `,
  }),
};

/** Uppercase text */
export const Uppercase: Story = {
  args: {
    uppercase: true,
    type: 'pro',
  },
  render: (args) => ({
    components: { AfsBadge },
    setup: () => ({ args }),
    template: '<AfsBadge v-bind="args">beta</AfsBadge>',
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText('beta');
    await expect(badge).toHaveClass('afs-badge_uppercase');
  },
};
