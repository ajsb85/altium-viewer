import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppHeaderPlugins from './AppHeaderPlugins.vue';

const meta: Meta<typeof AppHeaderPlugins> = {
  title: 'Layout/AppHeaderPlugins',
  component: AppHeaderPlugins,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="background: var(--afs-background); padding: 16px;"><story /></div>',
  })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    plugins: [
      { id: 'Search', icon: 'viewer-search-16' },
      { id: 'HelpPanel', icon: 'info-12' },
      { id: 'Download', icon: 'viewer-download-16' },
      { id: 'FullScreen', icon: 'viewer-fullscreen-16', preventClose: true },
    ],
  },
};

export const WithActive: Story = {
  args: {
    plugins: [
      { id: 'Search', icon: 'viewer-search-16', isActive: true },
      { id: 'Comments', icon: 'comment-bubble-text' },
    ],
  },
};

export const WithLabels: Story = {
  args: {
    plugins: [
      { id: 'PreviewPanel', icon: 'schematic-16', label: '[3] pdb_conn', isLocal: true, hasDropdown: true },
    ],
  },
};
