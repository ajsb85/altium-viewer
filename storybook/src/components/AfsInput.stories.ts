import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { userEvent, within } from 'storybook/test';
import { ref } from 'vue';
import AfsInput from './AfsInput.vue';

/**
 * AfsInput - Production Input Component
 * 
 * Text input with label, validation states, and focus effects.
 * Production CSS from production.css:13055-13210
 */
const meta: Meta<typeof AfsInput> = {
  title: 'Components/AfsInput',
  component: AfsInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'Input value (v-model)',
      control: 'text',
    },
    label: {
      description: 'Label text above the input',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder text',
      control: 'text',
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
    },
    warning: {
      description: 'Warning validation state (orange border)',
      control: 'boolean',
    },
    error: {
      description: 'Error validation state (red border)',
      control: 'boolean',
    },
    transparent: {
      description: 'Transparent background style',
      control: 'boolean',
    },
    code: {
      description: 'Monospace font for code input',
      control: 'boolean',
    },
    rounded: {
      description: 'Rounded corners',
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component: 'Text input component with validation states and various styling options.',
      },
    },
  },
  decorators: [
    () => ({
      template: '<div style="width: 280px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default input
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

/**
 * With label
 */
export const WithLabel: Story = {
  args: {
    label: 'Component Name',
    placeholder: 'e.g. STM32L452CEU6',
  },
};

/**
 * With value
 */
export const WithValue: Story = {
  args: {
    label: 'Part Number',
    modelValue: 'VLS252010HBX-2R2M-1',
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    modelValue: 'Cannot edit this',
    disabled: true,
  },
};

/**
 * Warning validation state
 */
export const Warning: Story = {
  args: {
    label: 'Quantity',
    modelValue: '999',
    warning: true,
  },
};

/**
 * Error validation state
 */
export const Error: Story = {
  args: {
    label: 'Email',
    modelValue: 'invalid-email',
    error: true,
  },
};

/**
 * All validation states
 */
export const ValidationStates: Story = {
  render: () => ({
    components: { AfsInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <AfsInput label="Normal" placeholder="No validation" />
        <AfsInput label="Warning" modelValue="Check this value" warning />
        <AfsInput label="Error" modelValue="Invalid value" error />
        <AfsInput label="Disabled" modelValue="Cannot change" disabled />
      </div>
    `,
  }),
};

/**
 * Transparent style
 */
export const Transparent: Story = {
  args: {
    transparent: true,
    placeholder: 'Transparent input...',
  },
  decorators: [
    () => ({
      template: '<div style="width: 280px; background: var(--background-control, rgba(255,255,255,0.05)); padding: 12px; border-radius: 4px;"><story /></div>',
    }),
  ],
};

/**
 * Code input (monospace)
 */
export const CodeInput: Story = {
  args: {
    label: 'Script',
    code: true,
    modelValue: 'console.log("Hello")',
  },
};

/**
 * Interactive typing demo
 */
export const InteractiveTyping: Story = {
  render: () => ({
    components: { AfsInput },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <AfsInput 
          v-model="value"
          label="Type something"
          placeholder="Start typing..."
        />
        <div style="color: rgba(255,255,255,0.5); font-size: 11px;">
          Value: "{{ value }}"
        </div>
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Focus and type', async () => {
      const input = canvas.getByPlaceholderText('Start typing...');
      await userEvent.click(input);
      await new Promise(r => setTimeout(r, 300));
      await userEvent.type(input, 'STM32L452CEU6', { delay: 50 });
    });
  },
};

/**
 * Form context
 */
export const FormContext: Story = {
  render: () => ({
    components: { AfsInput },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <AfsInput label="Component Name" placeholder="Enter name" />
        <AfsInput label="Description" placeholder="Enter description" />
        <AfsInput label="Quantity" placeholder="1" />
        <AfsInput label="Price" placeholder="$0.00" />
      </div>
    `,
  }),
};

/**
 * Without rounded corners
 */
export const NoRounding: Story = {
  args: {
    label: 'Sharp corners',
    placeholder: 'No border radius',
    rounded: false,
  },
};

/**
 * Focused state showcase
 */
export const FocusedState: Story = {
  args: {
    label: 'Click to focus',
    placeholder: 'Input will highlight',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Input will highlight');
    await userEvent.click(input);
  },
};
