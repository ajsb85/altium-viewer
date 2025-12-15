import type { Meta, StoryObj } from '@storybook/vue3-vite';
import HelpPanel from './HelpPanel.vue';

const meta: Meta<typeof HelpPanel> = {
  title: 'Plugins/HelpPanel',
  component: HelpPanel,
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

/** Default with shortcuts */
export const Default: Story = {
  args: {
    shortcuts: [
      { key: 'Space', description: 'Pan mode' },
      { key: 'Esc', description: 'Cancel action' },
      { key: 'F', description: 'Fit to view' },
      { key: 'R', description: 'Reset view' },
      { key: 'M', description: 'Measure tool' },
    ],
    links: [
      { label: 'Documentation', url: 'https://altium.com/docs', icon: 'book-16' },
      { label: 'Report Issue', url: 'https://altium.com/support', icon: 'bug-16' },
    ],
    version: 'v2.1.0',
  },
};

/** Minimal */
export const Minimal: Story = {
  args: {
    shortcuts: [
      { key: 'Esc', description: 'Close panel' },
    ],
  },
};
