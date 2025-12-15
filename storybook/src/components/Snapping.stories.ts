import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Snapping from './Snapping.vue';

const meta: Meta<typeof Snapping> = {
  title: 'Controls/Snapping',
  component: Snapping,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Interactive toggle */
export const Default: Story = {
  render: () => ({
    components: { Snapping },
    setup() {
      const isEnabled = ref(true);
      return { isEnabled };
    },
    template: '<Snapping v-model="isEnabled" />',
  }),
};

/** Without options */
export const NoOptions: Story = {
  args: {
    modelValue: true,
    showOptions: false,
  },
};
