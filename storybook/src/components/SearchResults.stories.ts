import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { userEvent, within, expect, fn } from 'storybook/test';
import SearchResults from './SearchResults.vue';

/**
 * SearchResults - Search Results List with Sections
 *
 * Displays search results grouped by category with highlighting.
 * Part of the Search plugin.
 */
const meta: Meta<typeof SearchResults> = {
  title: 'Plugins/SearchResults',
  component: SearchResults,
  tags: ['autodocs'],
  argTypes: {
    sections: {
      description: 'Array of result sections with items',
      control: 'object',
    },
    query: {
      description: 'Search query for text highlighting',
      control: 'text',
    },
    limit: {
      description: 'Max items per section (null = no limit)',
      control: 'number',
    },
    selectedId: {
      description: 'Currently selected item ID',
      control: 'text',
    },
    isLoading: {
      description: 'Show loading state',
      control: 'boolean',
    },
    emptyText: {
      description: 'Text shown when no results',
      control: 'text',
    },
    emptyIcon: {
      description: 'Icon name for empty state',
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
  },
  decorators: [
    () => ({
      template: `
        <div style="width: 320px; max-height: 450px; background: var(--afs-sidebar, #1c1c1e); border-radius: 8px; overflow: hidden;">
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
 * Default results with sections
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
 * With search highlighting
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
 * Loading state
 */
export const Loading: Story = {
  args: {
    sections: [],
    isLoading: true,
  },
};

/**
 * Empty state
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
 * With selected item
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
