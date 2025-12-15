import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { userEvent, within, expect, fn } from 'storybook/test';
import SearchInput from './SearchInput.vue';

/**
 * SearchInput - Search Input with Filter Dropdown
 *
 * Search input field with clear button and optional filter dropdown.
 * Part of the Search plugin.
 */
const meta: Meta<typeof SearchInput> = {
  title: 'Plugins/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'Search query value (v-model)',
      control: 'text',
    },
    placeholder: {
      description: 'Input placeholder text',
      control: 'text',
    },
    showFilters: {
      description: 'Show filter dropdown button',
      control: 'boolean',
    },
    activeFilterName: {
      description: 'Currently active filter name',
      control: 'text',
    },
  },
  args: {
    'onUpdate:modelValue': fn(),
    onSubmit: fn(),
    onClear: fn(),
    onFocus: fn(),
    onBlur: fn(),
    onToggleFilters: fn(),
  },
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
  },
  decorators: [
    () => ({
      template: `
        <div style="width: 400px; padding: 16px; background: var(--afs-sidebar, #1c1c1e); border-radius: 8px;">
          <story />
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default empty search
 */
export const Default: Story = {
  render: (args) => ({
    components: { SearchInput },
    setup() {
      const searchValue = ref('');
      return { args, searchValue };
    },
    template: `
      <SearchInput 
        v-model="searchValue"
        :placeholder="args.placeholder"
        :showFilters="args.showFilters"
        :activeFilterName="args.activeFilterName"
      />
    `,
  }),
  args: {
    modelValue: '',
    placeholder: 'Search components, nets...',
    showFilters: true,
    activeFilterName: 'All',
  },
};

/**
 * With search query
 */
export const WithQuery: Story = {
  render: (args) => ({
    components: { SearchInput },
    setup() {
      const searchValue = ref('R1');
      return { args, searchValue };
    },
    template: `
      <SearchInput 
        v-model="searchValue"
        :placeholder="args.placeholder"
        :showFilters="args.showFilters"
        :activeFilterName="args.activeFilterName"
      />
    `,
  }),
  args: {
    modelValue: 'R1',
    placeholder: 'Search components, nets...',
    showFilters: true,
    activeFilterName: 'All',
  },
};

/**
 * Without filter dropdown
 */
export const NoFilters: Story = {
  render: (args) => ({
    components: { SearchInput },
    setup() {
      const searchValue = ref('');
      return { args, searchValue };
    },
    template: `
      <SearchInput 
        v-model="searchValue"
        :placeholder="args.placeholder"
        :showFilters="false"
      />
    `,
  }),
  args: {
    modelValue: '',
    placeholder: 'Search...',
    showFilters: false,
  },
};

/**
 * Interactive search demo
 */
export const Interactive: Story = {
  render: (args) => ({
    components: { SearchInput },
    setup() {
      const searchValue = ref('');
      const filterName = ref('All');
      
      const handleToggleFilters = () => {
        const filters = ['All', 'Components', 'Nets', 'Footprints'];
        const idx = filters.indexOf(filterName.value);
        filterName.value = filters[(idx + 1) % filters.length];
      };
      
      return { args, searchValue, filterName, handleToggleFilters };
    },
    template: `
      <div>
        <SearchInput 
          v-model="searchValue"
          placeholder="Search components, nets..."
          :showFilters="true"
          :activeFilterName="filterName"
          @toggleFilters="handleToggleFilters"
        />
        <p style="margin-top: 12px; font-size: 12px; color: var(--afs-text-icon-secondary, #6b7280);">
          Query: "{{ searchValue }}" | Filter: {{ filterName }}
        </p>
      </div>
    `,
  }),
  args: {
    modelValue: '',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Focus search input', async () => {
      const input = canvas.getByPlaceholderText(/search components/i);
      await userEvent.click(input);
      await new Promise(r => setTimeout(r, 200));
    });

    await step('Type search query', async () => {
      const input = canvas.getByPlaceholderText(/search components/i);
      await userEvent.type(input, 'U1');
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Clear search', async () => {
      const clearBtn = canvasElement.querySelector('.search-input__clear') as HTMLElement;
      if (clearBtn) {
        await userEvent.click(clearBtn);
        await new Promise(r => setTimeout(r, 200));
      }
    });

    await step('Click filter dropdown', async () => {
      const filterBtn = canvasElement.querySelector('.search-input__filter-btn') as HTMLElement;
      if (filterBtn) {
        await userEvent.click(filterBtn);
        await new Promise(r => setTimeout(r, 200));
      }
    });
  },
};
