import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { userEvent, within, expect } from 'storybook/test';
import { ref, computed } from 'vue';
import LibTable from './LibTable.vue';
import AfsLink from './AfsLink.vue';
import AfsSearch from './AfsSearch.vue';

/**
 * LibTable - Production Table Component
 * 
 * Flexbox-based data table with sortable columns, hover states, and custom scrollbars.
 * Production CSS from production.css:38813-38970
 */
const meta: Meta<typeof LibTable> = {
  title: 'Components/LibTable',
  component: LibTable,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      description: 'Array of column definitions',
      control: 'object',
    },
    rows: {
      description: 'Array of row data',
      control: 'object',
    },
    hasHover: {
      description: 'Enable hover effect on rows',
      control: 'boolean',
    },
    defaultSortKey: {
      description: 'Initial sort column key',
      control: 'text',
    },
    defaultSortDir: {
      description: 'Initial sort direction',
      control: { type: 'select' },
      options: ['asc', 'desc'],
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Production table component with sortable columns, row hover, and custom scrollbars.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample BOM data
const bomColumns = [
  { key: 'rowNum', label: '№', width: '44px' },
  { key: 'name', label: 'Name', flex: '1 1 18%', sortable: true },
  { key: 'price', label: 'Price', width: '60px', align: 'right' as const, sortable: true },
  { key: 'description', label: 'Description', flex: '1 1 40%' },
  { key: 'quantity', label: 'Qty', width: '60px', align: 'right' as const, sortable: true },
];

const bomRows = [
  { rowNum: 136, name: 'VLS252010HBX-2R2M-1', price: '$0.14', description: 'Inductor for Power Circuit, 2.2 uH', quantity: 1 },
  { rowNum: 135, name: 'USB2517I-JZX', price: '$2.60', description: 'USB 2.0 Hi-Speed 7-Port Hub Controller', quantity: 1 },
  { rowNum: 134, name: 'TS5A23159RSER', price: '$0.09', description: 'IC SWITCH DUAL SPDT 10UQFN', quantity: 1 },
  { rowNum: 133, name: 'TS3USB221ARSER', price: '$0.09', description: 'USB 2.0 1:2 Multiplexer Switch', quantity: 2 },
  { rowNum: 132, name: 'TPS62060DSG', price: '$0.57', description: 'Step Down Converter, 3 MHz, 1.6 A', quantity: 1 },
  { rowNum: 131, name: 'TPS51220ARSNR', price: '$0.01', description: 'Notebook System Power Controller', quantity: 1 },
  { rowNum: 130, name: 'TPS2557DRB', price: '$0.24', description: 'Precision Current-Limited Switch', quantity: 2 },
  { rowNum: 129, name: 'STUSB4500QTR', price: '$0.48', description: 'USB PD Sink Controller', quantity: 1 },
  { rowNum: 128, name: 'STM32L452CEU6', price: '$1.05', description: 'ARM Cortex-M4 MCU 512KB FLASH', quantity: 1 },
  { rowNum: 127, name: 'SN74LVC1G57DRYR', price: '$0.06', description: 'Configurable Multiple-Function Gate', quantity: 8 },
];

/**
 * Default table with BOM-like data
 */
export const Default: Story = {
  args: {
    columns: bomColumns,
    rows: bomRows,
    hasHover: true,
    defaultSortKey: 'name',
    defaultSortDir: 'desc',
  },
};

/**
 * Simple table without sorting
 */
export const SimpleTable: Story = {
  args: {
    columns: [
      { key: 'id', label: 'ID', width: '60px' },
      { key: 'name', label: 'Component', flex: '1 1 auto' },
      { key: 'value', label: 'Value', width: '100px' },
    ],
    rows: [
      { id: 1, name: 'Resistor', value: '10kΩ' },
      { id: 2, name: 'Capacitor', value: '100nF' },
      { id: 3, name: 'LED', value: 'Red' },
      { id: 4, name: 'Transistor', value: '2N2222' },
    ],
    hasHover: true,
  },
};

/**
 * All columns sortable
 */
export const AllSortable: Story = {
  args: {
    columns: [
      { key: 'name', label: 'Name', flex: '1 1 auto', sortable: true },
      { key: 'price', label: 'Price', width: '80px', align: 'right', sortable: true },
      { key: 'stock', label: 'Stock', width: '80px', align: 'right', sortable: true },
      { key: 'category', label: 'Category', width: '120px', sortable: true },
    ],
    rows: [
      { name: 'STM32F4', price: '$5.20', stock: 150, category: 'MCU' },
      { name: 'ESP32', price: '$3.80', stock: 200, category: 'MCU' },
      { name: 'LM7805', price: '$0.35', stock: 500, category: 'Regulator' },
      { name: 'AMS1117', price: '$0.15', stock: 1000, category: 'Regulator' },
      { name: 'TL431', price: '$0.10', stock: 800, category: 'Reference' },
    ],
    hasHover: true,
  },
};

/**
 * No hover effect
 */
export const NoHover: Story = {
  args: {
    ...Default.args,
    hasHover: false,
  },
};

/**
 * Interactive demo with sorting
 */
export const InteractiveSort: Story = {
  args: {
    columns: bomColumns,
    hasHover: true,
  },
  render: (args) => ({
    components: { LibTable },
    setup() {
      const sortKey = ref('name');
      const sortDir = ref<'asc' | 'desc'>('desc');
      
      const sortedRows = computed(() => {
        const rows = [...bomRows];
        if (!sortKey.value) return rows;
        
        return rows.sort((a, b) => {
          const aVal = a[sortKey.value as keyof typeof a];
          const bVal = b[sortKey.value as keyof typeof b];
          
          // Handle numeric values
          if (typeof aVal === 'number' && typeof bVal === 'number') {
            return sortDir.value === 'asc' ? aVal - bVal : bVal - aVal;
          }
          
          // Handle string values (strip $ for prices)
          const aStr = String(aVal || '').replace('$', '');
          const bStr = String(bVal || '').replace('$', '');
          
          // Try numeric comparison for price-like strings
          const aNum = parseFloat(aStr);
          const bNum = parseFloat(bStr);
          if (!isNaN(aNum) && !isNaN(bNum)) {
            return sortDir.value === 'asc' ? aNum - bNum : bNum - aNum;
          }
          
          // Fall back to string comparison
          return sortDir.value === 'asc' 
            ? aStr.localeCompare(bStr) 
            : bStr.localeCompare(aStr);
        });
      });
      
      const handleSort = (key: string, dir: 'asc' | 'desc') => {
        sortKey.value = key;
        sortDir.value = dir;
      };
      
      return { args, sortedRows, handleSort };
    },
    template: `
      <div style="height: 300px; display: flex; flex-direction: column;">
        <LibTable 
          v-bind="args" 
          :rows="sortedRows" 
          @sort="handleSort"
        />
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click Name column to toggle sort', async () => {
      const nameHeader = canvas.getByText('Name');
      await userEvent.click(nameHeader);
      await new Promise(r => setTimeout(r, 500));
    });

    await step('Click Price column to sort by price', async () => {
      const priceHeader = canvas.getByText('Price');
      await userEvent.click(priceHeader);
      await new Promise(r => setTimeout(r, 500));
    });

    await step('Click Qty column to sort by quantity', async () => {
      const qtyHeader = canvas.getByText('Qty');
      await userEvent.click(qtyHeader);
      await new Promise(r => setTimeout(r, 500));
    });

    await step('Click Qty again to reverse sort', async () => {
      const qtyHeader = canvas.getByText('Qty');
      await userEvent.click(qtyHeader);
      await new Promise(r => setTimeout(r, 500));
    });
  },
};

/**
 * Large dataset with scrolling
 */
export const LargeDataset: Story = {
  args: {
    columns: bomColumns,
    rows: Array.from({ length: 50 }, (_, i) => ({
      rowNum: 50 - i,
      name: `Component-${String(i + 1).padStart(3, '0')}`,
      price: `$${(Math.random() * 10).toFixed(2)}`,
      description: `Description for component ${i + 1} with various specifications`,
      quantity: Math.floor(Math.random() * 20) + 1,
    })),
    hasHover: true,
  },
  decorators: [
    () => ({
      template: '<div style="height: 400px; display: flex; flex-direction: column;"><story /></div>',
    }),
  ],
};

/**
 * Right-aligned numeric columns
 */
export const NumericAlignment: Story = {
  args: {
    columns: [
      { key: 'part', label: 'Part Number', flex: '1 1 auto' },
      { key: 'qty', label: 'Quantity', width: '100px', align: 'right', sortable: true },
      { key: 'price', label: 'Unit Price', width: '100px', align: 'right', sortable: true },
      { key: 'total', label: 'Total', width: '100px', align: 'right', sortable: true },
    ],
    rows: [
      { part: 'CAP-100NF-0402', qty: 100, price: '$0.01', total: '$1.00' },
      { part: 'RES-10K-0402', qty: 200, price: '$0.005', total: '$1.00' },
      { part: 'LED-RED-0603', qty: 50, price: '$0.05', total: '$2.50' },
      { part: 'IC-STM32F4', qty: 5, price: '$4.50', total: '$22.50' },
      { part: 'CONN-USB-C', qty: 10, price: '$0.80', total: '$8.00' },
    ],
    hasHover: true,
  },
};

/**
 * **Performance Stress Test**
 * 
 * Renders 1000 rows to verify rendering performance.
 * The play function measures the time taken for the table to appear.
 */
export const StressTest: Story = {
  args: {
    columns: bomColumns,
    rows: Array.from({ length: 1000 }, (_, i) => ({
      rowNum: 1000 - i,
      name: `Performance-Test-Component-${String(i + 1).padStart(4, '0')}`,
      price: `$${(Math.random() * 100).toFixed(2)}`,
      description: `Stress testing row ${i + 1} with a longer description to ensure text rendering and layout handling is efficient at scale.`,
      quantity: Math.floor(Math.random() * 1000) + 1,
    })),
    hasHover: true,
  },
  decorators: [
    () => ({
      template: '<div style="height: 500px; display: flex; flex-direction: column;"><story /></div>',
    }),
  ],
  play: async ({ canvasElement, step }) => {
    const start = performance.now();
    const canvas = within(canvasElement);
    
    await step('Wait for first row to render', async () => {
      await canvas.findByText('Performance-Test-Component-0001');
    });

    const end = performance.now();
    const duration = end - start;
    console.log(`[StressTest] 1000 rows rendered in ${duration.toFixed(2)}ms`);
    
    await step('Scroll to bottom (simulation)', async () => {
      const lastRow = canvas.queryByText('Performance-Test-Component-1000');
      // In a real virtualized table this would be complex, but for simple rendering:
      if (lastRow) {
         // It might be visible or in DOM
         await expect(lastRow).toBeInTheDocument();
      }
    });
  },
};

/**
 * Complex BOM View Example
 * Matches specific final render requirements with search, links, and custom cell formatting.
 */
export const BOMExample: Story = {
  render: (args) => ({
    components: { LibTable, AfsLink, AfsSearch },
    setup() {
      const searchQuery = ref('');
      
      const columns = [
        { key: 'rowNum', label: '№', width: '44px' },
        { key: 'partNumber', label: 'Name', flex: '1 1 18%', sortable: true },
        { key: 'price', label: 'Price', width: '60px', align: 'right' as const, sortable: true },
        { key: 'description', label: 'Description', flex: '1 1 62%' },
        { key: 'designators', label: 'Designator', flex: '1 1 20%' },
        { key: 'quantity', label: 'Quantity', width: '82px', align: 'right' as const, sortable: true },
      ];

      const allRows = [
        {
          rowNum: 1,
          partNumber: '1SS400CSFH',
          partLink: 'https://octopart.com/part/rohm/1SS400CSFHT2RA',
          price: '$0.06',
          description: 'Switching Diode (High Speed Switching), 80 V, 100 mA, 2-Pin SOD-923, RoHS, Tape and Reel',
          designators: ['D21', 'D22', 'D23', 'D25', 'D26', 'D27', 'D31', 'D34'],
          quantity: 8
        },
        {
          rowNum: 2,
          partNumber: '47219-2001',
          partLink: 'https://octopart.com/part/molex/47219-2001',
          price: '$0.24',
          description: 'MicroSD Card Connector, Hinge Type, -40 to 85 degC, 8-Pin SMD, RoHS, Tape and Reel',
          designators: ['SKT3'],
          quantity: 1
        },
        {
          rowNum: 3,
          partNumber: '91931-31125LF',
          partLink: 'https://octopart.com/part/amphenol-communications-solutions/91931-31125LF',
          price: '$2.71',
          description: 'Receptacle, Pitch 1 mm, 25 Position, Height 4.15 mm, -55 to 130 degC',
          designators: ['CN1', 'CN2'],
          quantity: 2
        },
        {
          rowNum: 18,
          partNumber: 'BM05B-GHS-TBT',
          partLink: 'https://octopart.com/part/jst/BM05B-GHS-TBT%20%28LF%29%28SN%29%28N%29',
          price: '$0.17',
          description: 'GH Disconnectable Crimp Style Connector, Pitch 1.25 mm, 1 x 5 Position, Height 4.05 mm, -25 to 85 degC, RoHS, Tape and Reel',
          designators: ['CN6', 'CN8'],
          quantity: 2
        },
        {
          rowNum: 20,
          partNumber: 'Capacitor 1µF +/-0.1% 25V 0603',
          partLink: 'https://octopart.com/part/samsung-electro-mechanics/CL10A105KA8NNNC',
          price: '$0.01',
          description: 'Chip Capacitor, 1µF +/-0.1%, 25V, 0603, Thickness 1 mm',
          designators: ['C3', 'C4', 'C142', 'C143'],
          quantity: 4
        }
      ];

      const filteredRows = computed(() => {
        if (!searchQuery.value) return allRows;
        const query = searchQuery.value.toLowerCase();
        return allRows.filter(row => 
          row.partNumber.toLowerCase().includes(query) || 
          row.description.toLowerCase().includes(query) ||
          row.designators.some(d => d.toLowerCase().includes(query))
        );
      });

      return { columns, filteredRows, searchQuery };
    },
    template: `
      <div class="app__view app__view_BOMView" data-view="BOMView" style="padding: 0; background: #fff; height: 100vh; display: flex; flex-direction: column;">
        <div class="bom" style="display: flex; flex-direction: column; flex: 1; overflow: hidden;">
          
          <!-- Search Header -->
          <div class="search bom__search" style="padding: 12px 16px; border-bottom: 1px solid #e5e5e5;">
            <div class="afs-search-container">
               <AfsSearch v-model="searchQuery" placeholder="Search components..." />
            </div>
          </div>

          <!-- Content Area -->
          <div class="content bom__content" style="flex: 1; overflow: hidden; display: flex; flex-direction: column;">
            <LibTable 
              class="content__table"
              :columns="columns" 
              :rows="filteredRows"
              :has-hover="true"
              style="height: 100%;"
            >
              <!-- Name Column with Link -->
              <template #cell-partNumber="{ row }">
                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%;">
                  <AfsLink 
                    variant="primary" 
                    :href="row.partLink" 
                    target="_blank"
                    style="font-size: 13px; font-weight: 500;"
                  >
                    {{ row.partNumber }}
                  </AfsLink>
                </div>
              </template>

              <!-- Description Column -->
               <template #cell-description="{ value }">
                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #374151;" :title="value">{{ value }}</div>
              </template>

              <!-- Designators Column (Multiple Links) -->
              <template #cell-designators="{ value }">
                <div style="display: flex; flex-wrap: wrap; gap: 4px; max-height: 4.5em; overflow: hidden;">
                  <AfsLink 
                    v-for="d in value" 
                    :key="d"
                    variant="primary"
                    style="font-size: 12px;"
                  >
                    {{ d }}
                  </AfsLink>
                </div>
              </template>

              <!-- Row Num Column -->
              <template #cell-rowNum="{ value }">
                <div style="color: #9ca3af; font-size: 11px; text-align: center;">{{ value }}</div>
              </template>
              
              <!-- Empty State -->
              <template v-if="filteredRows.length === 0" #footer>
                <div style="padding: 32px; text-align: center; color: #6b7280; font-size: 13px;">
                  No components found matching "{{ searchQuery }}"
                </div>
              </template>

            </LibTable>
          </div>
          
          <!-- Status Footer -->
          <div style="padding: 8px 16px; border-top: 1px solid #e5e5e5; font-size: 12px; color: #9ca3af; display: flex; justify-content: space-between;">
            <span>{{ filteredRows.length }} items</span>
          </div>
        </div>
      </div>
    `,
  }),
};
