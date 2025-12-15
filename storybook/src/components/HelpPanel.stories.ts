import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { userEvent, within } from 'storybook/test';
import HelpPanel from './HelpPanel.vue';

/**
 * HelpPanel - Info Side Panel Component
 *
 * Side panel with menu items, links, and unit switcher.
 * Production HTML from HelpPanel
 */
const meta: Meta<typeof HelpPanel> = {
  title: 'Views/HelpPanel',
  component: HelpPanel,
  tags: ['autodocs'],
  argTypes: {
    title: { description: 'Panel title', control: 'text' },
    width: { description: 'Panel width in pixels', control: { type: 'range', min: 200, max: 400, step: 10 } },
    menuItems: { description: 'First section menu items', control: 'object' },
    linkItems: { description: 'Second section link items', control: 'object' },
    showUnitSwitcher: { description: 'Show unit switcher', control: 'boolean' },
    units: { description: 'Available units', control: 'object' },
    selectedUnit: { description: 'Selected unit', control: 'select', options: ['mm', 'mil'] },
  },
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
  },
  decorators: [
    () => ({
      template: `
        <div style="position: relative; height: 500px; background: #2c2c2e; display: flex; justify-content: flex-end;">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default InfoPanel with all sections
 */
export const Default: Story = {
  args: {
    title: 'Info',
    width: 240,
    menuItems: [
      { id: 'controls', label: 'Controls', icon: 'controls-12' },
      { id: 'board-info', label: 'Board Info', icon: 'board-info-12' },
    ],
    linkItems: [
      { id: 'documentation', label: 'Documentation', icon: 'help-12', href: 'https://www.altium.com/documentation/altium-designer/altium-365-viewer' },
      { id: 'about', label: 'About Altium 365 Viewer', icon: 'info-12' },
    ],
    showUnitSwitcher: true,
    units: ['mm', 'mil'],
    selectedUnit: 'mm',
  },
};

/**
 * Without unit switcher
 */
export const NoUnitSwitcher: Story = {
  args: {
    ...Default.args,
    showUnitSwitcher: false,
  },
};

/**
 * Mil units selected
 */
export const MilUnits: Story = {
  args: {
    ...Default.args,
    selectedUnit: 'mil',
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

    await step('Hover over Controls menu item', async () => {
      const controlsItem = canvas.getByText('Controls');
      await userEvent.hover(controlsItem);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Click unit tab', async () => {
      const milTab = canvas.getByText('mil');
      await userEvent.click(milTab);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Hover over close button', async () => {
      const closeBtn = canvasElement.querySelector('.afs-subheader__icon') as HTMLElement;
      if (closeBtn) {
        await userEvent.hover(closeBtn);
        await new Promise(r => setTimeout(r, 300));
      }
    });
  },
};
