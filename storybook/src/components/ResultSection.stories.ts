import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ResultSection from './ResultSection.vue';

const meta: Meta<typeof ResultSection> = {
  title: 'Search/ResultSection',
  component: ResultSection,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 240px; background: var(--afs-panel); border-radius: 4px;"><story /></div>',
  })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Components', count: 12 },
  render: (args) => ({
    components: { ResultSection },
    setup() { return { args }; },
    template: `
      <ResultSection v-bind="args">
        <div style="color: var(--afs-text-icon-secondary); font-size: 13px;">R1, R2, R3...</div>
      </ResultSection>
    `,
  }),
};

export const WithIcon: Story = {
  args: { title: 'Nets', count: 5, icon: 'net-16' },
  render: (args) => ({
    components: { ResultSection },
    setup() { return { args }; },
    template: `<ResultSection v-bind="args"><div style="color: var(--afs-text-icon-secondary);">GND, VCC...</div></ResultSection>`,
  }),
};

export const Collapsed: Story = {
  args: { title: 'Pads', count: 48, defaultCollapsed: true },
};
