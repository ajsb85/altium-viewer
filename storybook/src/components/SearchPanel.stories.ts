import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, within, userEvent } from 'storybook/test';
import { ref } from 'vue';
import SearchPanel from './SearchPanel.vue';

/**
 * SearchPanel - Complete search interface with filtering and results
 * 
 * Combines SearchInput, filter dropdown, and SearchResults into a full search experience.
 * 
 * @see Search.js plugin
 */
const meta: Meta<typeof SearchPanel> = {
  title: 'Plugins/SearchPanel',
  component: SearchPanel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="width: 320px; height: 450px; border: 1px solid #e5e7eb; border-radius: 8px;"><story /></div>',
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
      { id: 'c1', name: 'U1 - ATmega328P', icon: 'component-16' },
      { id: 'c2', name: 'R1 - 10K Resistor', icon: 'component-16' },
      { id: 'c3', name: 'C1 - 100nF Capacitor', icon: 'component-16' },
      { id: 'c4', name: 'LED1 - Red LED', icon: 'component-16' },
    ],
  },
  {
    id: 'nets',
    title: 'Nets',
    items: [
      { id: 'n1', name: 'GND', icon: 'net-16' },
      { id: 'n2', name: 'VCC', icon: 'net-16' },
      { id: 'n3', name: 'RESET', icon: 'net-16' },
    ],
  },
];

/** Default with sample results and interaction test */
export const Default: Story = {
  render: () => ({
    components: { SearchPanel },
    setup() {
      const results = ref(sampleResults);
      const selectedId = ref<string | null>(null);
      
      const handleSearch = (query: string) => {
        console.log('Search:', query);
      };
      
      const handleSelectItem = (item: any) => {
        selectedId.value = item.id;
      };
      
      return { results, selectedId, handleSearch, handleSelectItem };
    },
    template: `
      <SearchPanel 
        :results="results"
        :selected-id="selectedId"
        @search="handleSearch"
        @select-item="handleSelectItem"
      />
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Verify search input is present
    const searchInput = canvas.getByPlaceholderText(/search/i);
    await expect(searchInput).toBeInTheDocument();
    
    // Type in search input
    await userEvent.type(searchInput, 'test');
    await expect(searchInput).toHaveValue('test');
    
    // Verify section headers are displayed (from results prop)
    const componentsSection = canvas.getByText('Components');
    await expect(componentsSection).toBeInTheDocument();
  },
};

/** Loading state */
export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

/** Empty state */
export const Empty: Story = {
  args: {
    results: [],
    emptyText: 'No components or nets found',
  },
};

/** Without filters */
export const NoFilters: Story = {
  args: {
    results: sampleResults,
    showFilters: false,
  },
};
