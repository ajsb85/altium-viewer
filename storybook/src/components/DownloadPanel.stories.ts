import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { userEvent, within } from 'storybook/test';
import DownloadPanel from './DownloadPanel.vue';

/**
 * DownloadPanel - Download Side Panel Component
 *
 * Side panel for downloading project files with source and derived sections.
 * Production HTML from download.html
 */
const meta: Meta<typeof DownloadPanel> = {
  title: 'Views/DownloadPanel',
  component: DownloadPanel,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Panel title',
      control: 'text',
    },
    width: {
      description: 'Panel width in pixels',
      control: { type: 'range', min: 200, max: 400, step: 10 },
    },
    panelId: {
      description: 'Panel DOM id',
      control: 'text',
    },
    sourceTitle: {
      description: 'Source files section title',
      control: 'text',
    },
    sourceFiles: {
      description: 'Source file items',
      control: 'object',
    },
    derivedTitle: {
      description: 'Derived files section title',
      control: 'text',
    },
    derivedFiles: {
      description: 'Derived file items',
      control: 'object',
    },
    infoMessage: {
      description: 'Info message text',
      control: 'text',
    },
    actionText: {
      description: 'Action button text',
      control: 'text',
    },
  },
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
    docs: {
      description: {
        component: 'Download panel with project source files and derived outputs.',
      },
    },
  },
  decorators: [
    () => ({
      template: `
        <div style="position: relative; height: 600px; background: #2c2c2e; display: flex; justify-content: flex-end;">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Production-like data
const productionSourceFiles = [
  { name: 'Example', icon: 'project-pcb-16' },
];

const productionDerivedFiles = [
  { name: 'Gerber', icon: 'gerber-16' },
  { name: 'Assembly Docs', icon: 'assembly' },
  { name: 'PDF Schematic', icon: 'schematic-16' },
  { name: 'STEP', icon: 'mcad-16' },
  { name: 'BOM', icon: 'bom-16' },
];

/**
 * Default download panel with all sections
 */
export const Default: Story = {
  args: {
    title: 'Download',
    width: 240,
    sourceTitle: 'Project Source Files',
    sourceFiles: productionSourceFiles,
    derivedTitle: 'Derived Files',
    derivedFiles: productionDerivedFiles,
    infoMessage: 'You need to save this project to your Altium 365 Personal Space to be able to download derived files.',
    actionText: 'Save to Personal Space',
  },
};

/**
 * Without info message
 */
export const NoInfoMessage: Story = {
  args: {
    ...Default.args,
    infoMessage: '',
  },
};

/**
 * Only source files
 */
export const SourceFilesOnly: Story = {
  args: {
    title: 'Download',
    width: 240,
    sourceTitle: 'Project Source Files',
    sourceFiles: [
      { name: 'MyProject.PrjPcb', icon: 'project-pcb-16' },
    ],
    derivedFiles: [],
    actionText: 'Download Project',
  },
};

/**
 * Only derived files
 */
export const DerivedFilesOnly: Story = {
  args: {
    title: 'Download',
    width: 240,
    sourceFiles: [],
    derivedTitle: 'Available Outputs',
    derivedFiles: productionDerivedFiles,
    actionText: 'Download All',
  },
};

/**
 * Wide panel
 */
export const WidePanel: Story = {
  args: {
    ...Default.args,
    width: 320,
  },
};

/**
 * Multiple source files
 */
export const MultipleSourceFiles: Story = {
  args: {
    title: 'Download',
    width: 260,
    sourceTitle: 'Project Files',
    sourceFiles: [
      { name: 'MainBoard.PrjPcb', icon: 'project-pcb-16' },
      { name: 'PowerSupply.PrjPcb', icon: 'project-pcb-16' },
      { name: 'Interface.PrjPcb', icon: 'project-pcb-16' },
    ],
    derivedTitle: 'Derived Files',
    derivedFiles: [
      { name: 'Gerber', icon: 'gerber-16' },
      { name: 'BOM', icon: 'bom-16' },
    ],
    actionText: 'Download Selected',
  },
};

/**
 * Interactive demo
 */
export const Interactive: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Hover over close button', async () => {
      const closeBtn = canvasElement.querySelector('.afs-subheader__icon') as HTMLElement;
      if (closeBtn) {
        await userEvent.hover(closeBtn);
        await new Promise(r => setTimeout(r, 300));
      }
    });

    await step('Hover over action button', async () => {
      const actionBtn = canvas.getByText('Save to Personal Space');
      await userEvent.hover(actionBtn);
      await new Promise(r => setTimeout(r, 500));
    });

    await step('Click action button', async () => {
      const actionBtn = canvas.getByText('Save to Personal Space');
      await userEvent.click(actionBtn);
      await new Promise(r => setTimeout(r, 300));
    });
  },
};
