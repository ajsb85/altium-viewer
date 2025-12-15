import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import AppAlert from './AppAlert.vue';

/**
 * AppAlert displays contextual feedback messages to users.
 * Supports info, success, warning, and error states.
 */
const meta: Meta<typeof AppAlert> = {
  title: 'Feedback/AppAlert',
  component: AppAlert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Visual type of the alert',
    },
    title: {
      control: 'text',
      description: 'Alert title',
    },
    message: {
      control: 'text',
      description: 'Alert message body',
    },
    dismissible: {
      control: 'boolean',
      description: 'Show dismiss button',
    },
  },
  args: {
    onDismiss: fn(),
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Informational alert */
export const Info: Story = {
  args: {
    type: 'info',
    title: 'Information',
    message: 'This is an informational message about the current state.',
  },
};

/** Success confirmation */
export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success!',
    message: 'The design was saved successfully.',
  },
};

/** Warning notification */
export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'Some layers are not visible in the current view.',
  },
};

/** Error message */
export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error',
    message: 'Failed to load the PCB design file.',
  },
};

/** Dismissible alert */
export const Dismissible: Story = {
  args: {
    type: 'info',
    message: 'Click the X button to dismiss this alert.',
    dismissible: true,
  },
};

/** Alert with custom action buttons */
export const WithActions: Story = {
  args: {
    type: 'warning',
    title: 'Unsaved Changes',
    message: 'You have unsaved changes that will be lost.',
  },
  render: (args) => ({
    components: { AppAlert },
    setup() {
      return { args };
    },
    template: `
      <AppAlert v-bind="args">
        <template #actions>
          <button style="padding: 6px 12px; background: #f59e0b; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Save
          </button>
          <button style="padding: 6px 12px; background: transparent; border: 1px solid currentColor; border-radius: 4px; cursor: pointer;">
            Discard
          </button>
        </template>
      </AppAlert>
    `,
  }),
};
