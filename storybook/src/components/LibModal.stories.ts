import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import LibModal from './LibModal.vue';

const meta: Meta<typeof LibModal> = {
  title: 'Overlay/LibModal',
  component: LibModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Default modal with trigger */
export const Default: Story = {
  render: () => ({
    components: { LibModal },
    setup() {
      const isOpen = ref(false);
      return { isOpen };
    },
    template: `
      <div>
        <button @click="isOpen = true" style="padding: 8px 16px;">Open Modal</button>
        <LibModal v-model="isOpen" title="Modal Title">
          <p>This is the modal content.</p>
        </LibModal>
      </div>
    `,
  }),
};

/** With footer actions */
export const WithFooter: Story = {
  render: () => ({
    components: { LibModal },
    setup() {
      const isOpen = ref(false);
      return { isOpen };
    },
    template: `
      <div>
        <button @click="isOpen = true" style="padding: 8px 16px;">Open Modal</button>
        <LibModal v-model="isOpen" title="Confirm Action">
          <p>Are you sure you want to proceed?</p>
          <template #footer>
            <button @click="isOpen = false" style="padding: 8px 16px;">Cancel</button>
            <button @click="isOpen = false" style="padding: 8px 16px; background: #3b82f6; color: white; border: none; border-radius: 4px;">Confirm</button>
          </template>
        </LibModal>
      </div>
    `,
  }),
};

/** No header */
export const NoHeader: Story = {
  render: () => ({
    components: { LibModal },
    setup() {
      const isOpen = ref(false);
      return { isOpen };
    },
    template: `
      <div>
        <button @click="isOpen = true" style="padding: 8px 16px;">Open Modal</button>
        <LibModal v-model="isOpen" :show-header="false">
          <p style="text-align: center;">Minimal modal content</p>
        </LibModal>
      </div>
    `,
  }),
};
