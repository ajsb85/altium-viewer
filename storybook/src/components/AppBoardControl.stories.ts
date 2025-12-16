import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppBoardControl from './AppBoardControl.vue';

const meta: Meta<typeof AppBoardControl> = {
  title: 'Plugins/AppBoardControl',
  component: AppBoardControl,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TopSide: Story = { args: { viewMode: 'top', is3D: false } };
export const BottomSide: Story = { args: { viewMode: 'bottom', is3D: false } };
export const View3D: Story = { args: { viewMode: 'top', is3D: true } };

/**
 * **Interactive Demo**
 * 
 * Simulated interaction toggling 2D/3D and Top/Bottom views.
 */
export const Interactive: Story = {
  render: () => ({
    components: { AppBoardControl },
    setup() {
      const { ref } = require('vue');
      const viewMode = ref('top');
      const is3D = ref(false);
      
      const handleModeChange = (mode: string) => {
        if (mode === '3d') {
          is3D.value = !is3D.value;
        } else {
          viewMode.value = mode;
        }
      };
      
      return { viewMode, is3D, handleModeChange };
    },
    template: `
      <div style="padding: 20px;">
        <AppBoardControl 
          :viewMode="viewMode" 
          :is3D="is3D" 
          @modeChange="handleModeChange" 
        />
        <div style="margin-top: 20px; color: var(--afs-text-icon-secondary);">
          Current: {{ is3D ? '3D' : '2D' }} - {{ viewMode }}
        </div>
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const { userEvent, within } = require('storybook/test');
    const canvas = within(canvasElement);

    await step('Switch to Bottom View', async () => {
      // Assuming button has aria-label or title 'Bottom'
      const bottomBtn = canvas.getByTitle('Bottom side'); 
      await userEvent.click(bottomBtn);
      await new Promise(r => setTimeout(r, 500));
    });

    await step('Switch to 3D View', async () => {
      const radio3d = canvas.getByTitle('3D');
      await userEvent.click(radio3d);
      await new Promise(r => setTimeout(r, 500));
    });

    await step('Switch back to Top', async () => {
      const topBtn = canvas.getByTitle('Top side');
        await userEvent.click(topBtn);
        await new Promise(r => setTimeout(r, 500));
    });
  }
};
