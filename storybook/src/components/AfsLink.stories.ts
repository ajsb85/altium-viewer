import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AfsLink from './AfsLink.vue';

/**
 * AfsLink - Production Link Component
 * 
 * Styled link with primary, accent, and secondary variants.
 * Production CSS from production.css:12787-12830
 */
const meta: Meta<typeof AfsLink> = {
  title: 'Components/AfsLink',
  component: AfsLink,
  tags: ['autodocs'],
  argTypes: {
    href: {
      description: 'Link URL (if provided, renders as <a>, otherwise <button>)',
      control: 'text',
    },
    variant: {
      description: 'Visual variant',
      control: { type: 'select' },
      options: ['primary', 'accent', 'secondary', 'regular-text'],
    },
    external: {
      description: 'Open link in new tab',
      control: 'boolean',
    },
    preventBlur: {
      description: 'Prevent focus outline (for use in tables)',
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Link component with multiple styling variants for different contexts.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Primary link (default) - Blue color
 */
export const Primary: Story = {
  args: {
    href: 'https://example.com',
    variant: 'primary',
    default: 'View Component Details',
  },
  render: (args) => ({
    components: { AfsLink },
    setup() { return { args }; },
    template: '<AfsLink v-bind="args">View Component Details</AfsLink>',
  }),
};

/**
 * Accent link - Orange color with underline
 */
export const Accent: Story = {
  args: {
    href: 'https://octopart.com',
    variant: 'accent',
  },
  render: (args) => ({
    components: { AfsLink },
    setup() { return { args }; },
    template: '<AfsLink v-bind="args">Buy on Octopart</AfsLink>',
  }),
};

/**
 * Secondary link - Muted color
 */
export const Secondary: Story = {
  args: {
    href: '#',
    variant: 'secondary',
  },
  render: (args) => ({
    components: { AfsLink },
    setup() { return { args }; },
    template: '<AfsLink v-bind="args">See more options</AfsLink>',
  }),
};

/**
 * Regular text link
 */
export const RegularText: Story = {
  args: {
    href: '#',
    variant: 'regular-text',
  },
  render: (args) => ({
    components: { AfsLink },
    setup() { return { args }; },
    template: '<AfsLink v-bind="args">Learn more</AfsLink>',
  }),
};

/**
 * As button (no href)
 */
export const AsButton: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    components: { AfsLink },
    setup() { return { args }; },
    template: '<AfsLink v-bind="args">Click me</AfsLink>',
  }),
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  render: () => ({
    components: { AfsLink },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
        <div>
          <span style="color: rgba(255,255,255,0.5); width: 100px; display: inline-block;">Primary:</span>
          <AfsLink href="#" variant="primary">VLS252010HBX-2R2M-1</AfsLink>
        </div>
        <div>
          <span style="color: rgba(255,255,255,0.5); width: 100px; display: inline-block;">Accent:</span>
          <AfsLink href="#" variant="accent">Buy on Octopart</AfsLink>
        </div>
        <div>
          <span style="color: rgba(255,255,255,0.5); width: 100px; display: inline-block;">Secondary:</span>
          <AfsLink href="#" variant="secondary">View datasheet</AfsLink>
        </div>
        <div>
          <span style="color: rgba(255,255,255,0.5); width: 100px; display: inline-block;">Regular:</span>
          <AfsLink href="#" variant="regular-text">More info</AfsLink>
        </div>
      </div>
    `,
  }),
};

/**
 * Designator links (BOM context)
 */
export const DesignatorLinks: Story = {
  render: () => ({
    components: { AfsLink },
    template: `
      <div style="display: flex; gap: 4px; flex-wrap: wrap;">
        <AfsLink variant="primary" prevent-blur>R1</AfsLink>
        <AfsLink variant="primary" prevent-blur>R2</AfsLink>
        <AfsLink variant="primary" prevent-blur>R3</AfsLink>
        <AfsLink variant="primary" prevent-blur>R4</AfsLink>
        <AfsLink variant="primary" prevent-blur>R5</AfsLink>
        <AfsLink variant="primary" prevent-blur>R6</AfsLink>
        <AfsLink variant="primary" prevent-blur>R7</AfsLink>
        <AfsLink variant="primary" prevent-blur>R8</AfsLink>
      </div>
    `,
  }),
};

/**
 * Component part numbers (external links)
 */
export const PartNumbers: Story = {
  render: () => ({
    components: { AfsLink },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px; align-items: flex-start;">
        <AfsLink href="https://octopart.com/part/tdk/VLS252010HBX-2R2M-1" variant="primary" external>VLS252010HBX-2R2M-1</AfsLink>
        <AfsLink href="https://octopart.com/part/microchip/USB2517I-JZX-TR" variant="primary" external>USB2517I-JZX</AfsLink>
        <AfsLink href="https://octopart.com/part/stmicroelectronics/STM32L452CEU6" variant="primary" external>STM32L452CEU6</AfsLink>
        <AfsLink href="https://octopart.com/part/texas-instruments/TPS62060DSGR" variant="primary" external>TPS62060DSG</AfsLink>
      </div>
    `,
  }),
};

/**
 * In table context
 */
export const InTableContext: Story = {
  decorators: [
    () => ({
      template: `
        <div style="background: var(--background-control, rgba(255,255,255,0.05)); padding: 8px 16px; border-radius: 4px;">
          <story />
        </div>
      `,
    }),
  ],
  render: () => ({
    components: { AfsLink },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <AfsLink href="https://example.com" variant="primary" prevent-blur>STM32L452CEU6</AfsLink>
        <span style="color: rgba(255,255,255,0.5);">|</span>
        <AfsLink variant="primary" prevent-blur>U16</AfsLink>
        <span style="color: rgba(255,255,255,0.5);">$1.05</span>
      </div>
    `,
  }),
};
