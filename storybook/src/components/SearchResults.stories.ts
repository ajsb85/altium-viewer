import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { userEvent, within, expect, fn } from 'storybook/test';
import SearchResults from './SearchResults.vue';

/**
 * SearchResults - Search Results List with Sections
 *
 * A complex list component that displays search results grouped by category (e.g., Components, Nets).
 * Features include:
 * - Grouped results with section headers
 * - Text highlighting for search terms
 * - Keyboard navigation support (up/down/enter)
 * - Loading and empty states
 * - Selection highlighting
 * 
 * Part of the Search plugin for examining PCB/Schematic data.
 */
const meta: Meta<typeof SearchResults> = {
  title: 'Plugins/SearchResults',
  component: SearchResults,
  tags: ['autodocs'],
  argTypes: {
    sections: {
      description: 'Array of result sections containing items. Each section has an ID, title, and list of items.',
      control: 'object',
      table: {
        type: { summary: 'SearchSection[]' },
      },
    },
    query: {
      description: 'Current search query string used for text highlighting within results.',
      control: 'text',
    },
    limit: {
      description: 'Maximum number of items to show per section before showing "Show more" button. Set to null for unlimited.',
      control: 'number',
    },
    selectedId: {
      description: 'ID of the currently selected item. Used to highlight the active row.',
      control: 'text',
    },
    isLoading: {
      description: 'Whether data is currently being fetched. Shows a skeleton or loading indicator.',
      control: 'boolean',
    },
    emptyText: {
      description: 'Message to display when no results are found matching the query.',
      control: 'text',
    },
    emptyIcon: {
      description: 'Icon name from AfsIcon library to display in the empty state.',
      control: 'text',
    },
  },
  args: {
    onSelect: fn(),
    onShowMore: fn(),
  },
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    docs: {
      description: {
        component: 'The `SearchResults` component is the main display area for the search plugin. It renders grouped lists of items found in the design, with support for highlighting matched text and keyboard navigation.',
      },
    },
  },
  decorators: [
    () => ({
      template: `
        <div style="width: 320px; max-height: 450px; background: var(--afs-sidebar, #1c1c1e); border-radius: 8px; overflow: hidden; border: 1px solid var(--afs-border, #3c3c3e);">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleResults = [
  {
    id: 'components',
    title: 'Components',
    items: [
      { id: 'U1', name: 'U1 - ATmega328P', icon: 'component-16' },
      { id: 'U2', name: 'U2 - LM7805', icon: 'component-16' },
      { id: 'R1', name: 'R1 - 10k Resistor', icon: 'component-16' },
      { id: 'R2', name: 'R2 - 4.7k Resistor', icon: 'component-16' },
      { id: 'C1', name: 'C1 - 100nF Capacitor', icon: 'component-16' },
      { id: 'C2', name: 'C2 - 10uF Capacitor', icon: 'component-16' },
    ],
  },
  {
    id: 'nets',
    title: 'Nets',
    items: [
      { id: 'VCC', name: 'VCC', icon: 'net-16' },
      { id: 'GND', name: 'GND', icon: 'net-16' },
      { id: 'SDA', name: 'SDA', icon: 'net-16' },
    ],
  },
];

/**
 * **Default State**
 * 
 * Shows a standard list of results grouped by category (Components, Nets).
 * This is the typical state after a user has typed a query that returns matches.
 */
export const Default: Story = {
  args: {
    sections: sampleResults,
    query: '',
    limit: 5,
    isLoading: false,
  },
};

/**
 * **Text Highlighting**
 * 
 * Demonstrates how search terms are highlighted within the result text.
 * In this example, "R1" is the query, and it corresponds to matching text in the items.
 */
export const WithHighlighting: Story = {
  args: {
    sections: sampleResults,
    query: 'R1',
    limit: 5,
    isLoading: false,
  },
};

/**
 * **Loading State**
 * 
 * Shown while search results are being fetched from the server or processed.
 * Displays a loading spinner or skeleton loader.
 */
export const Loading: Story = {
  args: {
    sections: [],
    isLoading: true,
  },
};

/**
 * **Empty State**
 * 
 * Displayed when the search query returns no results.
 * Customizable message and icon guide the user.
 */
export const Empty: Story = {
  args: {
    sections: [],
    isLoading: false,
    emptyText: 'No matching components found',
    emptyIcon: 'search-32',
  },
};

/**
 * **With Selection**
 * 
 * Shows how an active item appears when selected.
 * Used for keyboard navigation or when clicking an item.
 */
export const WithSelection: Story = {
  args: {
    sections: sampleResults,
    query: '',
    selectedId: 'U1',
    limit: 5,
  },
};

/**
 * Interactive selection
 */
export const Interactive: Story = {
  render: (args) => ({
    components: { SearchResults },
    setup() {
      const selectedId = ref<string | null>(null);
      
      const handleSelect = (item: { id: string }) => {
        selectedId.value = item.id;
      };
      
      return { args, selectedId, handleSelect };
    },
    template: `
      <SearchResults 
        :sections="args.sections"
        :query="args.query"
        :limit="args.limit"
        :selectedId="selectedId"
        @select="handleSelect"
      />
    `,
  }),
  args: {
    sections: sampleResults,
    query: '',
    limit: 5,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click on U1 component', async () => {
      const u1Item = canvas.getByText(/U1 - ATmega/i);
      await userEvent.click(u1Item);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Click on VCC net', async () => {
      const vccItem = canvas.getByText('VCC');
      await userEvent.click(vccItem);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Hover over R1 component', async () => {
      const r1Item = canvas.getByText(/R1 - 10k/i);
      await userEvent.hover(r1Item);
      await new Promise(r => setTimeout(r, 200));
    });
  },
};

/**
 * Unlimited items (no "Show more")
 */
export const Unlimited: Story = {
  args: {
    sections: sampleResults,
    query: '',
    limit: null,
    isLoading: false,
  },
};
