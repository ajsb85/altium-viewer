import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { userEvent, within } from 'storybook/test';
import BomView from './BomView.vue';
import type { BomItem } from './BomView.vue';

/**
 * BomView - Bill of Materials View Component
 * 
 * Complete BOM view with search, sortable table, and component links.
 * Production structure from bom.html
 */
const meta: Meta<typeof BomView> = {
  title: 'Views/BomView',
  component: BomView,
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of BOM items to display',
      control: 'object',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Bill of Materials view showing components, prices, descriptions, designators, and quantities.',
      },
    },
  },
  decorators: [
    () => ({
      template: '<div style="height: 600px; display: flex; flex-direction: column;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Real production BOM data extracted from the HTML
const realBomItems: BomItem[] = [
  { rowNum: 136, name: 'VLS252010HBX-2R2M-1', href: 'https://octopart.com/part/tdk/VLS252010HBX-2R2M-1', price: '$0.14', description: 'Inductor for Power Circuit, 2.2 uH, +/- 20%, -40 to 105 degC, 2-Pin SMD, RoHS, Tape and Reel', designators: ['L4'], quantity: 1 },
  { rowNum: 135, name: 'USB2517I-JZX', href: 'https://octopart.com/part/microchip/USB2517I-JZX-TR', price: '$2.60', description: 'Industrial Temperature Rated USB 2.0 Hi-Speed 7-Port Hub Controller, 3.3 V, -40 to 85 degC, 64-Pin QFN, RoHS, Tube', designators: ['U14'], quantity: 1 },
  { rowNum: 134, name: 'TS5A23159RSER', href: 'https://octopart.com/part/texas-instruments/TS5A23159RSER', price: '$0.09', description: 'IC SWITCH DUAL SPDT 10UQFN', designators: ['U15'], quantity: 1 },
  { rowNum: 133, name: 'TS3USB221ARSER', href: 'https://octopart.com/part/texas-instruments/TS3USB221ARSER', price: '$0.09', description: 'ESD Protected, High-Speed USB 2.0 (480 Mbps) 1:2 Multiplexer / Demultiplexer Switch, 6 ohm RON, 2.5 to 3.3V', designators: ['U23', 'U24'], quantity: 2 },
  { rowNum: 132, name: 'TPS62060DSG', href: 'https://octopart.com/part/texas-instruments/TPS62060DSGR', price: '$0.57', description: 'Step Down Converter, 3 MHz, 1.6 A, -45 to 85 degC, 8-Pin WSON, RoHS, Tape and Reel', designators: ['U12'], quantity: 1 },
  { rowNum: 131, name: 'TPS51220ARSNR', href: 'https://octopart.com/part/texas-instruments/TPS51220ARSNR', price: '$0.01', description: 'Fixed Frequency, 99% Duty Cycle Peak Current Mode Notebook System Power Controller', designators: ['U2'], quantity: 1 },
  { rowNum: 130, name: 'TPS2557DRB', href: 'https://octopart.com/part/texas-instruments/TPS2557DRB', price: '$0.24', description: 'Precision Adjustable Current-Limited Power-Distribution Switch, 0.5 to 5.0 A Current Limit', designators: ['U25', 'U27'], quantity: 2 },
  { rowNum: 129, name: 'STUSB4500QTR', href: 'https://octopart.com/part/stmicroelectronics/STUSB4500QTR', price: '$0.48', description: 'Standalone USB PD Sink Controller with Short-to-VBUS Protections, 4.1 to 22 V, -45 to 105 degC, 24-Pin QFN, RoHS', designators: ['U19'], quantity: 1 },
  { rowNum: 128, name: 'STM32L452CEU6', href: 'https://octopart.com/part/stmicroelectronics/STM32L452CEU6', price: '$1.05', description: 'ARM® Cortex®-M4 STM32L4 Microcontroller IC 32-Bit 80MHz 512KB (512K x 8) FLASH 48-UFQFPN (7x7)', designators: ['U16'], quantity: 1 },
  { rowNum: 127, name: 'SN74LVC1G57DRYR', href: 'https://octopart.com/part/texas-instruments/SN74LVC1G57DRYR', price: '$0.06', description: 'CONFIGURABLE MULTIPLE-FUNCTION GATE, DRY0006A, LARGE T&R', designators: ['U3', 'U5', 'U7', 'U8', 'U30', 'U33', 'U36', 'U39'], quantity: 8 },
  { rowNum: 126, name: 'SISS27DN', href: 'https://octopart.com/part/vishay/SISS27DN-T1-GE3', price: '$0.21', description: 'P-Channel (D-S) MOSFET, 30 V, 50 A, -50 to 150 degC, 8-Pin PowerPAK1212, RoHS, Tape and Reel', designators: ['Q16', 'Q17', 'Q18', 'Q19', 'Q20', 'Q21'], quantity: 6 },
  { rowNum: 125, name: 'RZM002P02T2L', href: 'https://octopart.com/part/rohm/RZM002P02T2L', price: '$0.04', description: 'Pch Small Signal MOSFET, 20 V, 200 mA, 3-Pin SOT723, RoHS, Tape and Reel', designators: ['Q3', 'Q5', 'Q6', 'Q14'], quantity: 4 },
  { rowNum: 98, name: 'Resistor 10K  +/-1 % 0402 63 mW', href: 'https://octopart.com/part/panasonic/ERJ-2RKF1002X', price: 'N/A', description: 'Chip Resistor, 10 kOhms, +/-1 %, 63 mW, -55 to 125 degC, 0402', designators: ['R38', 'R54', 'R58', 'R59', 'R60', 'R61', 'R62', 'R80'], quantity: 48 },
  { rowNum: 109, name: 'Resistor 100K +/-1 % 0402 63 mW', href: 'https://octopart.com/part/panasonic/ERJ-2RKF1003X', price: 'N/A', description: 'Chip Resistor, 100 kOhms, +/-1 %, 63 mW, -55 to 155 degC, 0402', designators: ['R6', 'R7', 'R18', 'R19', 'R30', 'R31'], quantity: 60 },
  { rowNum: 78, name: 'QBLP595-Y', href: 'https://octopart.com/part/qt-brightek/QBLP595-Y', price: '$0.18', description: 'Chip LED 0402, Yellow, 0.02 A, 3.1 to 3.7 V, -40 to 80 degC, 2-Pin SMD, RoHS, Tape and Reel', designators: ['LED5', 'LED8', 'LED9', 'LED12', 'LED14', 'LED16', 'LED18', 'LED20', 'LED22'], quantity: 9 },
  { rowNum: 77, name: 'QBLP595-R', href: 'https://octopart.com/part/qt-brightek/QBLP595-R', price: '$0.15', description: 'Chip LED 0402, Red, 0.02 A, 2.0 to 2.5 V, -40 to 80 degC, 2-Pin SMD, RoHS, Tape and Reel', designators: ['LED1', 'LED7'], quantity: 2 },
  { rowNum: 76, name: 'QBLP595-IG', href: 'https://octopart.com/part/qt-brightek/QBLP595-IG', price: '$0.18', description: 'Chip LED 0402, Green, 0.02 A, 3.1 to 3.7 V, -40 to 80 degC, 2-Pin SMD, RoHS, Tape and Reel', designators: ['LED2', 'LED4', 'LED6', 'LED10', 'LED11', 'LED13', 'LED15', 'LED17', 'LED19', 'LED21'], quantity: 10 },
  { rowNum: 50, name: 'DX07S024JJ3R1300', href: 'https://octopart.com/part/jae-electronics/DX07S024JJ3R1300', price: '$0.50', description: 'USB-C Connector, 20 V, 1.25 A, -30 to 80 degC, RoHS, Tape and Reel', designators: ['CN15'], quantity: 1 },
];

/**
 * Production BOM - Real data from the Altium Viewer
 */
export const ProductionBom: Story = {
  args: {
    items: realBomItems,
  },
};

/**
 * Empty BOM
 */
export const Empty: Story = {
  args: {
    items: [],
  },
};

/**
 * Few items
 */
export const FewItems: Story = {
  args: {
    items: realBomItems.slice(0, 5),
  },
};

/**
 * Many designators
 */
export const ManyDesignators: Story = {
  args: {
    items: [
      {
        rowNum: 1,
        name: 'Capacitor 100nF 0402',
        price: '$0.01',
        description: 'Ceramic Capacitor, 100nF, 16V, X7R, 0402',
        designators: Array.from({ length: 50 }, (_, i) => `C${i + 1}`),
        quantity: 50,
      },
      {
        rowNum: 2,
        name: 'Resistor 10K 0402',
        price: '$0.005',
        description: 'Chip Resistor, 10K, 1%, 0402',
        designators: Array.from({ length: 30 }, (_, i) => `R${i + 1}`),
        quantity: 30,
      },
    ],
  },
};

/**
 * Interactive search demo
 */
export const InteractiveSearch: Story = {
  args: {
    items: realBomItems,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Search for STM32', async () => {
      const input = canvas.getByPlaceholderText('Search');
      await userEvent.type(input, 'STM32', { delay: 80 });
      await new Promise(r => setTimeout(r, 500));
    });

    await step('Clear search', async () => {
      const input = canvas.getByPlaceholderText('Search');
      await userEvent.clear(input);
      await new Promise(r => setTimeout(r, 300));
    });

    await step('Search for LED', async () => {
      const input = canvas.getByPlaceholderText('Search');
      await userEvent.type(input, 'LED', { delay: 80 });
      await new Promise(r => setTimeout(r, 500));
    });
  },
};

/**
 * Sorting demo
 */
export const SortingDemo: Story = {
  args: {
    items: realBomItems,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Sort by Price', async () => {
      const priceHeader = canvas.getByText('Price');
      await userEvent.click(priceHeader);
      await new Promise(r => setTimeout(r, 400));
    });

    await step('Toggle Price sort direction', async () => {
      const priceHeader = canvas.getByText('Price');
      await userEvent.click(priceHeader);
      await new Promise(r => setTimeout(r, 400));
    });

    await step('Sort by Quantity', async () => {
      const qtyHeader = canvas.getByText('Quantity');
      await userEvent.click(qtyHeader);
      await new Promise(r => setTimeout(r, 400));
    });
  },
};

/**
 * High quantity items
 */
export const HighQuantity: Story = {
  args: {
    items: realBomItems.filter(item => item.quantity >= 5).sort((a, b) => b.quantity - a.quantity),
  },
};

/**
 * Components only (ICs)
 */
export const ComponentsOnly: Story = {
  args: {
    items: realBomItems.filter(item => 
      item.name.includes('STM32') || 
      item.name.includes('TPS') || 
      item.name.includes('USB') ||
      item.designators.some(d => d.startsWith('U'))
    ),
  },
};

/**
 * Passives only (R, C, L)
 */
export const PassivesOnly: Story = {
  args: {
    items: realBomItems.filter(item => 
      item.name.toLowerCase().includes('resistor') || 
      item.name.toLowerCase().includes('capacitor') || 
      item.name.toLowerCase().includes('inductor')
    ),
  },
};
