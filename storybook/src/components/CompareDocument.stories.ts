import type { Meta, StoryObj } from '@storybook/vue3-vite';
import CompareDocument from './CompareDocument.vue';

const meta: Meta<typeof CompareDocument> = {
  title: 'Compare/CompareDocument',
  component: CompareDocument,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({ components: { story }, template: '<div style="width: 400px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Main.SchDoc Changes',
    sections: [
      {
        id: 'components',
        title: 'Components',
        status: 'modified',
        changes: [
          { id: '1', type: 'added', description: 'Added U3 (LM7805)' },
          { id: '2', type: 'removed', description: 'Removed R5' },
          { id: '3', type: 'modified', description: 'R1: 10k → 4.7k' },
        ],
      },
      {
        id: 'nets',
        title: 'Nets',
        status: 'added',
        changes: [
          { id: '4', type: 'added', description: 'New net: VOUT' },
        ],
      },
    ],
  },
};

export const Empty: Story = {
  args: { title: 'No Changes', sections: [] },
};
