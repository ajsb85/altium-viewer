import type { Meta, StoryObj } from '@storybook/vue3';
import AppSidebar from './AppSidebar.vue';

const meta = {
  title: 'Components/AppSidebar',
  component: AppSidebar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    resizable: { control: 'boolean' },
    flex: { control: 'boolean' },
  },
} satisfies Meta<typeof AppSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { AppSidebar },
    setup() {
      return { args };
    },
    template: `
      <div style="height: 500px; display: flex;">
        <AppSidebar v-bind="args">
            <template #title>Sidebar Title</template>
            <template #subTitle>Secondary Text</template>
            <p>Main content goes here.</p>
            <p>More content...</p>
        </AppSidebar>
        <div style="flex: 1; padding: 20px; background: #e5e5e5;">
            Main Area Content
        </div>
      </div>
    `,
  }),
  args: {
    size: 'sm',
    resizable: false,
    metaInfo: {},
  },
};

export const WithSubtitleExtra: Story = {
  args: {
    metaInfo: { subTitleAdditionalText: "v1.0" },
    size: 'md',
    resizable: true,
  },
  render: (args) => ({
    components: { AppSidebar },
    setup() {
      return { args };
    },
    template: `
      <div style="height: 500px; display: flex;">
        <AppSidebar v-bind="args">
            <template #title>Project Files</template>
            <template #subTitle>Documents</template>
            <ul>
                <li>File 1.prj</li>
                <li>File 2.pcb</li>
            </ul>
        </AppSidebar>
        <div style="flex: 1; padding: 20px; background: #e5e5e5;">
            Main Area Content
        </div>
      </div>
    `,
  }),
};
