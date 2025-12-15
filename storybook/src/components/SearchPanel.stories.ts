import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { userEvent, within } from 'storybook/test';
import SearchPanel from './SearchPanel.vue';

/**
 * SearchPanel - Search Side Panel Component
 *
 * Side panel with search form, primary search button, and filters toggle.
 * Production HTML from SearchPanel
 */
const meta: Meta<typeof SearchPanel> = {
  title: 'Views/SearchPanel',
  component: SearchPanel,
  tags: ['autodocs'],
  argTypes: {
    title: { description: 'Panel title', control: 'text' },
    subtitle: { description: 'Keyboard shortcut subtitle', control: 'text' },
    width: { description: 'Panel width in pixels', control: { type: 'range', min: 200, max: 400, step: 10 } },
    placeholder: { description: 'Input placeholder text', control: 'text' },
    showFiltersButton: { description: 'Show filters button', control: 'boolean' },
    modelValue: { description: 'Search query value', control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
  },
  decorators: [
    () => ({
      template: `
        <div style="position: relative; height: 400px; background: #2c2c2e; display: flex; justify-content: flex-end;">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default search panel
 */
export const Default: Story = {
  args: {
    title: 'Search',
    subtitle: '(Ctrl+F)',
    width: 240,
    placeholder: 'Search',
    showFiltersButton: true,
  },
};

/**
 * Without filters button
 */
export const NoFilters: Story = {
  args: {
    ...Default.args,
    showFiltersButton: false,
  },
};

/**
 * With pre-filled query
 */
export const WithQuery: Story = {
  args: {
    ...Default.args,
    modelValue: 'R1',
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
 * Interactive demo
 */
export const Interactive: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Type in search input', async () => {
      const input = canvas.getByPlaceholderText('Search');
      await userEvent.type(input, 'Capacitor');
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Hover over search button', async () => {
      const searchBtn = canvasElement.querySelector('.form__icon-search') as HTMLElement;
      if (searchBtn) {
        await userEvent.hover(searchBtn);
        await new Promise(r => setTimeout(r, 300));
      }
    });

    await step('Click filters button', async () => {
      const filtersBtn = canvasElement.querySelectorAll('.form__btn')[1] as HTMLElement;
      if (filtersBtn) {
        await userEvent.click(filtersBtn);
        await new Promise(r => setTimeout(r, 300));
      }
    });
  },
};
