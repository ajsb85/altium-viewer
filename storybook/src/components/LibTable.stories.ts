import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { userEvent, within, expect } from 'storybook/test';
import LibTable from './LibTable.vue';

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
    ...Default.args,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Click Name column to toggle sort', async () => {
      const nameHeader = canvas.getByText('Name');
      await userEvent.click(nameHeader);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Click Price column to sort by price', async () => {
      const priceHeader = canvas.getByText('Price');
      await userEvent.click(priceHeader);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Click Qty column to sort by quantity', async () => {
      const qtyHeader = canvas.getByText('Qty');
      await userEvent.click(qtyHeader);
      await new Promise(r => setTimeout(r, 300));
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
