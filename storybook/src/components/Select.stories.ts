import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Select from './Select.vue';

const meta: Meta<typeof Select> = {
  title: 'Controls/Select',
  component: Select,
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
    components: { Select },
    setup() {
      const isActive = ref(false);
      return { isActive };
    },
    template: '<Select v-model="isActive" />',
  }),
};

/** With selection count */
export const WithSelection: Story = {
  args: {
    modelValue: true,
    selectedItems: [{ id: 1 }, { id: 2 }, { id: 3 }],
  },
};
