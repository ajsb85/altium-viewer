import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Label from './Label.vue';

const meta: Meta<typeof Label> = {
  title: 'Core/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { text: 'Component Name' } };
export const UsingSlot: Story = { render: () => ({ components: { Label }, template: '<Label>Custom <strong>Label</strong></Label>' }) };
export const Disabled: Story = { args: { text: 'Disabled Label', disabled: true } };
