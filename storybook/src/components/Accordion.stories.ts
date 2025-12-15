import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, within, userEvent } from 'storybook/test';
import Accordion from './Accordion.vue';

const meta: Meta<typeof Accordion> = {
  title: 'Data Display/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="width: 320px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Default accordion */
export const Default: Story = {
  args: {
    title: 'Click to expand',
  },
  render: (args) => ({
    components: { Accordion },
    setup: () => ({ args }),
    template: `
      <Accordion v-bind="args">
        <p>This is the accordion content. It can contain any content.</p>
      </Accordion>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByText('Click to expand');
    
    // Click to expand
    await userEvent.click(header);
    await expect(canvas.getByText(/accordion content/i)).toBeInTheDocument();
  },
};

/** Initially expanded */
export const Expanded: Story = {
  args: {
    title: 'Already expanded',
    defaultExpanded: true,
  },
  render: (args) => ({
    components: { Accordion },
    setup: () => ({ args }),
    template: `
      <Accordion v-bind="args">
        <p>This panel starts expanded.</p>
      </Accordion>
    `,
  }),
};

/** Multiple accordions */
export const Multiple: Story = {
  render: () => ({
    components: { Accordion },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <Accordion title="Section 1" default-expanded>
          <p>Content for section 1</p>
        </Accordion>
        <Accordion title="Section 2">
          <p>Content for section 2</p>
        </Accordion>
        <Accordion title="Section 3">
          <p>Content for section 3</p>
        </Accordion>
      </div>
    `,
  }),
};
