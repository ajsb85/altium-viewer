import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import DownloadPanel from './DownloadPanel.vue';

/**
 * DownloadPanel - Download options for design files
 * 
 * @see Download.js plugin
 */
const meta: Meta<typeof DownloadPanel> = {
  title: 'Plugins/DownloadPanel',
  component: DownloadPanel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="width: 320px; height: 400px; border: 1px solid #e5e7eb; border-radius: 8px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOutputs = [
  { id: 'gerber', name: 'Gerber Files', size: 245678, isActive: true },
  { id: 'bom', name: 'Bill of Materials (CSV)', size: 12340, isActive: true },
  { id: 'pdf', name: 'Schematic PDF', size: 1567890, isActive: false },
  { id: 'dxf', name: 'DXF Outline', size: 34567, isActive: false },
];

/** Default with output files */
export const Default: Story = {
  render: () => ({
    components: { DownloadPanel },
    setup() {
      const outputs = ref([...sampleOutputs]);
      const threeD = ref({ id: '3d', name: 'STEP 3D Model', size: 5678901, isActive: false });
      const originalFile = ref({ id: 'orig', name: 'MyProject.PrjPcb', size: 890123, isActive: false });
      
      const toggleOutput = (output: any) => {
        const item = outputs.value.find(o => o.id === output.id);
        if (item) item.isActive = !item.isActive;
      };
      
      const toggleThreeD = () => {
        threeD.value.isActive = !threeD.value.isActive;
      };
      
      const toggleOriginal = () => {
        originalFile.value.isActive = !originalFile.value.isActive;
      };
      
      return { outputs, threeD, originalFile, toggleOutput, toggleThreeD, toggleOriginal };
    },
    template: `
      <DownloadPanel 
        :outputs="outputs"
        :three-d="threeD"
        :original-file="originalFile"
        @toggle-output="toggleOutput"
        @toggle-three-d="toggleThreeD"
        @toggle-original="toggleOriginal"
      />
    `,
  }),
};

/** With error message */
export const WithError: Story = {
  args: {
    outputs: sampleOutputs,
    error: 'Network error: Unable to prepare download files',
  },
};

/** Downloading state */
export const Downloading: Story = {
  args: {
    outputs: sampleOutputs,
    isDownloading: true,
  },
};

/** Empty state */
export const Empty: Story = {
  args: {
    outputs: [],
    threeD: null,
    originalFile: null,
  },
};
