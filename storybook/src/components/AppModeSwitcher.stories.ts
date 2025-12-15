import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import AppModeSwitcher from './AppModeSwitcher.vue';

const meta: Meta<typeof AppModeSwitcher> = {
  title: 'Controls/AppModeSwitcher',
  component: AppModeSwitcher,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { AppModeSwitcher },
    setup() {
      const mode = ref('point');
      return {
        mode,
        modes: [
          { id: 'point', label: 'Point', icon: 'dot-16' },
          { id: 'line', label: 'Line', icon: 'line-16' },
          { id: 'area', label: 'Area', icon: 'square-16' },
        ],
        handleChange: (id: string) => { mode.value = id; },
      };
    },
    template: '<AppModeSwitcher :modes="modes" :active-mode="mode" @change="handleChange" />',
  }),
};

export const WithLabels: Story = {
  args: {
    modes: [
      { id: '2d', label: '2D' },
      { id: '3d', label: '3D' },
    ],
    activeMode: '2d',
    showLabels: true,
  },
};
