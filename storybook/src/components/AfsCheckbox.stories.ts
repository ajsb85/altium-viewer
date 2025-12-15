import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { userEvent, within } from 'storybook/test';
import { ref } from 'vue';
import AfsCheckbox from './AfsCheckbox.vue';

/**
 * AfsCheckbox - Production Checkbox Component
 * 
 * Checkbox with label, validation states, and indeterminate mode.
 * Production CSS from production.css:9271-9430
 */
const meta: Meta<typeof AfsCheckbox> = {
  title: 'Components/AfsCheckbox',
  component: AfsCheckbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'Checked state (v-model)',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
    },
    warning: {
      description: 'Warning validation state',
      control: 'boolean',
    },
    error: {
      description: 'Error validation state',
      control: 'boolean',
    },
    indeterminate: {
      description: 'Indeterminate state (horizontal bar)',
      control: 'boolean',
    },
    default: {
      description: 'Label text',
      control: 'text',
      table: { category: 'Slots' },
    },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component: 'Checkbox component with label and validation states.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Unchecked checkbox
 */
export const Unchecked: Story = {
  args: {
    modelValue: false,
  },
  render: (args) => ({
    components: { AfsCheckbox },
    setup() { return { args }; },
    template: '<AfsCheckbox v-bind="args">Enable feature</AfsCheckbox>',
  }),
};

/**
 * Checked checkbox
 */
export const Checked: Story = {
  args: {
    modelValue: true,
  },
  render: (args) => ({
    components: { AfsCheckbox },
    setup() { return { args }; },
    template: '<AfsCheckbox v-bind="args">Enabled</AfsCheckbox>',
  }),
};

/**
 * Indeterminate state
 */
export const Indeterminate: Story = {
  args: {
    modelValue: true,
    indeterminate: true,
  },
  render: (args) => ({
    components: { AfsCheckbox },
    setup() { return { args }; },
    template: '<AfsCheckbox v-bind="args">Partially selected</AfsCheckbox>',
  }),
};

/**
 * Disabled states
 */
export const Disabled: Story = {
  render: () => ({
    components: { AfsCheckbox },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <AfsCheckbox disabled>Disabled unchecked</AfsCheckbox>
        <AfsCheckbox disabled modelValue>Disabled checked</AfsCheckbox>
      </div>
    `,
  }),
};

/**
 * Warning validation
 */
export const Warning: Story = {
  args: {
    warning: true,
  },
  render: (args) => ({
    components: { AfsCheckbox },
    setup() { return { args }; },
    template: '<AfsCheckbox v-bind="args">Requires attention</AfsCheckbox>',
  }),
};

/**
 * Error validation
 */
export const Error: Story = {
  args: {
    error: true,
  },
  render: (args) => ({
    components: { AfsCheckbox },
    setup() { return { args }; },
    template: '<AfsCheckbox v-bind="args">Required field</AfsCheckbox>',
  }),
};

/**
 * All states showcase
 */
export const AllStates: Story = {
  render: () => ({
    components: { AfsCheckbox },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <AfsCheckbox>Unchecked</AfsCheckbox>
        <AfsCheckbox modelValue>Checked</AfsCheckbox>
        <AfsCheckbox modelValue indeterminate>Indeterminate</AfsCheckbox>
        <AfsCheckbox disabled>Disabled</AfsCheckbox>
        <AfsCheckbox warning>Warning</AfsCheckbox>
        <AfsCheckbox error>Error</AfsCheckbox>
      </div>
    `,
  }),
};

/**
 * Without label
 */
export const NoLabel: Story = {
  render: () => ({
    components: { AfsCheckbox },
    template: `
      <div style="display: flex; gap: 12px;">
        <AfsCheckbox />
        <AfsCheckbox modelValue />
        <AfsCheckbox modelValue indeterminate />
      </div>
    `,
  }),
};

/**
 * Interactive toggle demo
 */
export const InteractiveToggle: Story = {
  render: () => ({
    components: { AfsCheckbox },
    setup() {
      const checked = ref(false);
      return { checked };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <AfsCheckbox v-model="checked">Click to toggle</AfsCheckbox>
        <div style="color: rgba(255,255,255,0.5); font-size: 11px;">
          State: {{ checked ? 'Checked' : 'Unchecked' }}
        </div>
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click to check', async () => {
      const checkbox = canvas.getByText('Click to toggle');
      await userEvent.click(checkbox);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Click to uncheck', async () => {
      const checkbox = canvas.getByText('Click to toggle');
      await userEvent.click(checkbox);
      await new Promise(r => setTimeout(r, 300));
    });
  },
};

/**
 * Layer visibility context
 */
export const LayerVisibility: Story = {
  render: () => ({
    components: { AfsCheckbox },
    setup() {
      const layers = ref([
        { name: 'Top Layer', visible: true },
        { name: 'Bottom Layer', visible: true },
        { name: 'Silkscreen', visible: false },
        { name: 'Soldermask', visible: true },
      ]);
      return { layers };
    },
    template: `
      <div style="background: var(--background-secondary, #2c2c2e); padding: 12px; border-radius: 8px; min-width: 200px;">
        <div style="color: rgba(255,255,255,0.5); font-size: 10px; text-transform: uppercase; margin-bottom: 8px;">Layers</div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <AfsCheckbox 
            v-for="layer in layers" 
            :key="layer.name"
            v-model="layer.visible"
          >
            {{ layer.name }}
          </AfsCheckbox>
        </div>
      </div>
    `,
  }),
};

/**
 * Form options context
 */
export const FormOptions: Story = {
  render: () => ({
    components: { AfsCheckbox },
    setup() {
      const options = ref({
        notifications: true,
        darkMode: true,
        autoSave: false,
        analytics: false,
      });
      return { options };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; min-width: 220px;">
        <AfsCheckbox v-model="options.notifications">Email notifications</AfsCheckbox>
        <AfsCheckbox v-model="options.darkMode">Dark mode</AfsCheckbox>
        <AfsCheckbox v-model="options.autoSave">Auto-save changes</AfsCheckbox>
        <AfsCheckbox v-model="options.analytics">Usage analytics</AfsCheckbox>
      </div>
    `,
  }),
};
