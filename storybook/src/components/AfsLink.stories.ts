import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AfsLink from './AfsLink.vue';

/**
 * AfsLink - Styled link/anchor component
 * 
 * @see vendors.js AfsLink component
 */
const meta: Meta<typeof AfsLink> = {
  title: 'Navigation/AfsLink',
  component: AfsLink,
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'Link destination URL',
    },
    external: {
      control: 'boolean',
      description: 'Open in new tab with external indicator',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Text size',
    },
    underline: {
      control: 'boolean',
      description: 'Show underline',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Default link */
export const Default: Story = {
  args: {
    href: '#',
  },
  render: (args) => ({
    components: { AfsLink },
    setup: () => ({ args }),
    template: '<AfsLink v-bind="args">Click here</AfsLink>',
  }),
};

/** External link */
export const External: Story = {
  args: {
    href: 'https://altium.com',
    external: true,
  },
  render: (args) => ({
    components: { AfsLink },
    setup: () => ({ args }),
    template: '<AfsLink v-bind="args">Visit Altium</AfsLink>',
  }),
};

/** Size variants */
export const Sizes: Story = {
  render: () => ({
    components: { AfsLink },
    template: `
      <div style="display: flex; gap: 16px; align-items: baseline;">
        <AfsLink size="sm" href="#">Small</AfsLink>
        <AfsLink size="md" href="#">Medium</AfsLink>
        <AfsLink size="lg" href="#">Large</AfsLink>
      </div>
    `,
  }),
};

/** No underline */
export const NoUnderline: Story = {
  args: {
    href: '#',
    underline: false,
  },
  render: (args) => ({
    components: { AfsLink },
    setup: () => ({ args }),
    template: '<AfsLink v-bind="args">Subtle link</AfsLink>',
  }),
};
