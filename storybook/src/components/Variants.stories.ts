import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Variants from './Variants.vue';

const meta: Meta<typeof Variants> = {
  title: 'Plugins/Variants',
  component: Variants,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="width: 280px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleVariants = [
  { id: 'default', name: 'Base Design', description: 'Original configuration', isDefault: true },
  { id: 'v1', name: 'High Power', description: 'Enhanced power supply' },
  { id: 'v2', name: 'Low Cost', description: 'Budget components' },
  { id: 'v3', name: 'Industrial', description: 'Extended temperature range' },
];

/** Default with variants */
export const Default: Story = {
  render: () => ({
    components: { Variants },
    setup() {
      const selectedId = ref('default');
      const handleSelect = (variant: any) => {
        selectedId.value = variant.id;
      };
      return { variants: sampleVariants, selectedId, handleSelect };
    },
    template: `
      <Variants 
        :variants="variants"
        :selected-id="selectedId"
        @select="handleSelect"
      />
    `,
  }),
};

/** Empty state */
export const Empty: Story = {
  args: {
    variants: [],
  },
};
