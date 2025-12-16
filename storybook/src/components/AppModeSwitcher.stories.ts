import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { userEvent, within } from 'storybook/test';
import AppModeSwitcher from './AppModeSwitcher.vue';

/**
 * AppModeSwitcher - Mode selection toggle component
 *
 * Used for switching between measurement modes (Point, Line, Area).
 */
const meta: Meta<typeof AppModeSwitcher> = {
  title: 'Controls/AppModeSwitcher',
  component: AppModeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    modes: {
      description: 'Array of mode options with id, label, and optional icon',
      control: 'object',
    },
    activeMode: {
      description: 'Currently active mode ID',
      control: 'text',
    },
    showLabels: {
      description: 'Show text labels alongside icons',
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const measurementModes = [
  { id: 'point', label: 'Point', icon: 'dot-16' },
  { id: 'line', label: 'Line', icon: 'line-16' },
  { id: 'area', label: 'Area', icon: 'square-16' },
];

/**
 * Default measurement mode switcher
 */
export const Default: Story = {
  render: () => ({
    components: { AppModeSwitcher },
    setup() {
      const mode = ref('point');
      return {
        mode,
        modes: measurementModes,
        handleChange: (id: string) => { mode.value = id; },
      };
    },
    template: '<AppModeSwitcher :modes="modes" :active-mode="mode" @change="handleChange" />',
  }),
};

/**
 * 2D/3D view switcher
 */
export const ViewSwitcher: Story = {
  args: {
    modes: [
      { id: '2d', label: '2D' },
      { id: '3d', label: '3D' },
    ],
    activeMode: '2d',
    showLabels: true,
  },
};

/**
 * Interactive mode switching
 */
export const Interactive: Story = {
  render: () => ({
    components: { AppModeSwitcher },
    setup() {
      const mode = ref('point');
      return {
        mode,
        modes: measurementModes,
        handleChange: (id: string) => { mode.value = id; },
      };
    },
    template: '<AppModeSwitcher :modes="modes" :active-mode="mode" @change="handleChange" />',
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click Line mode', async () => {
      const lineBtn = canvas.getByText('Line');
      await userEvent.click(lineBtn);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Click Area mode', async () => {
      const areaBtn = canvas.getByText('Area');
      await userEvent.click(areaBtn);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Click Point mode', async () => {
      const pointBtn = canvas.getByText('Point');
      await userEvent.click(pointBtn);
      await new Promise(r => setTimeout(r, 300));
    });
  },
};

