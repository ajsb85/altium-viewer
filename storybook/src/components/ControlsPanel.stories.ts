import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { userEvent, within } from 'storybook/test';
import ControlsPanel from './ControlsPanel.vue';

/**
 * ControlsPanel - Keyboard Controls Panel Component
 *
 * Subpanel showing keyboard shortcuts for viewer controls.
 * Production HTML from ControlsPanel
 */
const meta: Meta<typeof ControlsPanel> = {
  title: 'Views/ControlsPanel',
  component: ControlsPanel,
  tags: ['autodocs'],
  argTypes: {
    title: { description: 'Panel title (shows in back button)', control: 'text' },
    width: { description: 'Panel width in pixels', control: { type: 'range', min: 200, max: 400, step: 10 } },
    controlSections: { description: 'Control sections with keyboard shortcuts', control: 'object' },
  },
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
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

// Production keyboard controls data
const productionControls = [
  {
    controls: [
      { label: 'Select', keys: ['LMB'] },
      { label: 'Zoom In/Out', keys: ['Scroll'] },
      { label: 'Pan', keys: ['RMB', 'Drag'] },
      { label: 'Rotate in 3D', keys: ['LMB', 'Drag'] },
    ],
  },
  {
    dividerBefore: true,
    controls: [
      { label: 'Reset View', keys: ['R'] },
      { label: 'Switch to 2D', keys: ['2'] },
      { label: 'Switch to 3D', keys: ['3'] },
      { label: 'Next / Previous Layer', keys: ['+/-'] },
      { label: 'Fold / Unfold in 3D (rigid-flex)', keys: ['5'] },
      { label: 'Flip Board Top / Bottom', keys: ['F'] },
    ],
  },
];

/**
 * Default controls panel with all keyboard shortcuts
 */
export const Default: Story = {
  args: {
    title: 'Controls',
    width: 240,
    controlSections: productionControls,
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
 * Interactive with resize functionality
 */
export const InteractiveResize: Story = {
  render: (args) => ({
    components: { ControlsPanel },
    setup() {
      const panelWidth = ref(args.width);
      
      const handleResize = (newWidth: number) => {
        panelWidth.value = newWidth;
      };
      
      const handleClose = () => {
        console.log('Close clicked');
      };
      
      const handleBack = () => {
        console.log('Back clicked');
      };
      
      return { args, panelWidth, handleResize, handleClose, handleBack };
    },
    template: `
      <ControlsPanel
        v-bind="args"
        :width="panelWidth"
        @resize="handleResize"
        @close="handleClose"
        @back="handleBack"
      />
    `,
  }),
  args: {
    title: 'Controls',
    width: 240,
    controlSections: productionControls,
  },
  play: async ({ canvasElement, step }) => {
    await step('Hover over back button', async () => {
      const backBtn = canvasElement.querySelector('.app__back-btn') as HTMLElement;
      if (backBtn) {
        await userEvent.hover(backBtn);
        await new Promise(r => setTimeout(r, 500));
      }
    });

    await step('Click back button', async () => {
      const backBtn = canvasElement.querySelector('.app__back-btn') as HTMLElement;
      if (backBtn) {
        await userEvent.click(backBtn);
        await new Promise(r => setTimeout(r, 300));
      }
    });

    await step('Hover over close button', async () => {
      const closeBtn = canvasElement.querySelector('.afs-subheader__icon') as HTMLElement;
      if (closeBtn) {
        await userEvent.hover(closeBtn);
        await new Promise(r => setTimeout(r, 500));
      }
    });
  },
};

/**
 * Minimal controls
 */
export const MinimalControls: Story = {
  args: {
    title: 'Controls',
    width: 240,
    controlSections: [
      {
        controls: [
          { label: 'Select', keys: ['LMB'] },
          { label: 'Pan', keys: ['RMB'] },
          { label: 'Zoom', keys: ['Scroll'] },
        ],
      },
    ],
  },
};
