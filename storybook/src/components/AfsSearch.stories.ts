import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { userEvent, within } from 'storybook/test';
import { ref } from 'vue';
import AfsSearch from './AfsSearch.vue';

/**
 * AfsSearch - Production Search Input Component
 * 
 * Search input with search icon, clear button, and form submission.
 * Production CSS from production.css:13013-13053
 */
const meta: Meta<typeof AfsSearch> = {
  title: 'Components/AfsSearch',
  component: AfsSearch,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'The search input value (v-model)',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder text',
      control: 'text',
    },
    showClear: {
      description: 'Show clear button when input has value',
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Search input component with icon buttons for search and clear actions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default search input
 */
export const Default: Story = {
  args: {
    modelValue: '',
    placeholder: 'Search',
    showClear: true,
  },
};

/**
 * With initial value
 */
export const WithValue: Story = {
  args: {
    modelValue: 'STM32',
    placeholder: 'Search components',
    showClear: true,
  },
};

/**
 * Custom placeholder
 */
export const CustomPlaceholder: Story = {
  args: {
    modelValue: '',
    placeholder: 'Search BOM items...',
    showClear: true,
  },
};

/**
 * Without clear button
 */
export const NoClearButton: Story = {
  args: {
    modelValue: 'Capacitor',
    placeholder: 'Search',
    showClear: false,
  },
};

/**
 * Interactive demo with typing and clear
 */
export const InteractiveDemo: Story = {
  render: () => ({
    components: { AfsSearch },
    setup() {
      const searchValue = ref('');
      const lastSearch = ref('');
      
      function handleSearch(value: string) {
        lastSearch.value = value;
      }
      
      function handleClear() {
        lastSearch.value = '';
      }
      
      return { searchValue, lastSearch, handleSearch, handleClear };
    },
    template: `
      <div style="width: 300px;">
        <AfsSearch
          v-model="searchValue"
          placeholder="Type to search..."
          @search="handleSearch"
          @clear="handleClear"
        />
        <div style="margin-top: 16px; color: rgba(255,255,255,0.6); font-size: 12px;">
          <div>Current value: "{{ searchValue }}"</div>
          <div>Last search: "{{ lastSearch }}"</div>
        </div>
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Type search query', async () => {
      const input = canvas.getByPlaceholderText('Type to search...');
      await userEvent.type(input, 'Resistor 10k', { delay: 50 });
      await new Promise(r => setTimeout(r, 500));
    });

    await step('Press Enter to search', async () => {
      const input = canvas.getByPlaceholderText('Type to search...');
      await userEvent.type(input, '{enter}');
      await new Promise(r => setTimeout(r, 500));
    });
  },
};

/**
 * In BOM context (wider)
 */
export const InBomContext: Story = {
  decorators: [
    () => ({
      template: `
        <div style="width: 100%; max-width: 600px; padding: 12px 16px; background: var(--background-secondary, #2c2c2e); border-radius: 8px;">
          <div class="afs-search-container">
            <story />
          </div>
        </div>
      `,
    }),
  ],
  args: {
    modelValue: '',
    placeholder: 'Search BOM...',
    showClear: true,
  },
};

/**
 * Focused state showcase
 */
export const FocusedState: Story = {
  args: {
    modelValue: '',
    placeholder: 'Click to focus',
    showClear: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Click to focus');
    await userEvent.click(input);
  },
};
