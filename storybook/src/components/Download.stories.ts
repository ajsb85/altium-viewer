import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Download from './Download.vue';

const meta: Meta<typeof Download> = {
  title: 'Plugins/Download',
  component: Download,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 280px; background: var(--afs-panel); border-radius: 4px;"><story /></div>',
  })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { id: 'pdf', title: 'PDF', icon: 'file-pdf-16', description: 'Schematics & Assembly' },
      { id: 'gerber', title: 'Gerber', icon: 'file-gerber-16', description: 'Manufacturing files' },
      { id: 'step', title: 'STEP', icon: 'file-step-16', description: '3D model' },
      { id: 'bom', title: 'BOM', icon: 'file-csv-16', description: 'Bill of Materials' },
    ],
  },
};

export const WithDisabled: Story = {
  args: {
    options: [
      { id: 'pdf', title: 'PDF', icon: 'file-pdf-16' },
      { id: 'step', title: 'STEP', icon: 'file-step-16', disabled: true, description: 'Not available' },
    ],
  },
};
