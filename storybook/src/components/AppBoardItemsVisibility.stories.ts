import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppBoardItemsVisibility from './AppBoardItemsVisibility.vue';

const meta: Meta<typeof AppBoardItemsVisibility> = {
  title: 'Plugins/AppBoardItemsVisibility',
  component: AppBoardItemsVisibility,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 240px; height: 400px;"><story /></div>',
  })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { viewMode: 'top', activeTab: 'layers' },
  render: (args) => ({
    components: { AppBoardItemsVisibility },
    setup() { return { args }; },
    template: `
      <AppBoardItemsVisibility v-bind="args">
        <div style="padding: 12px; color: var(--afs-text-icon-secondary);">
          Layer list content here...
        </div>
      </AppBoardItemsVisibility>
    `,
  }),
};

export const ObjectsTab: Story = {
  args: { viewMode: 'top', activeTab: 'objects' },
};
