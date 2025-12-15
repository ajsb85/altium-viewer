import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import MeasurementDisplay from './MeasurementDisplay.vue';

/**
 * MeasurementDisplay - Distance measurement panel
 * 
 * @see Measurement.js plugin
 */
const meta: Meta<typeof MeasurementDisplay> = {
  title: 'Plugins/MeasurementDisplay',
  component: MeasurementDisplay,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="width: 280px; border: 1px solid #e5e7eb; border-radius: 8px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Empty state */
export const Empty: Story = {
  args: {},
};

/** With active measurement */
export const WithMeasurement: Story = {
  args: {
    measurement: {
      x: 150.5,
      y: 75.2,
      xy: 168.2,
    },
    unit: 'mil',
  },
};

/** With saved measurements */
export const WithSavedMeasurements: Story = {
  render: () => ({
    components: { MeasurementDisplay },
    setup() {
      const measurements = ref([
        { id: '1', x: 100, y: 50, xy: 111.8 },
        { id: '2', x: 200, y: 100, xy: 223.6 },
        { id: '3', x: 50, y: 25, xy: 55.9 },
      ]);
      const selectedId = ref<string | null>(null);
      
      const handleSelect = (m: any) => {
        selectedId.value = m.id;
      };
      
      const handleDelete = (m: any) => {
        measurements.value = measurements.value.filter(item => item.id !== m.id);
      };
      
      return { measurements, selectedId, handleSelect, handleDelete };
    },
    template: `
      <MeasurementDisplay 
        :measurements="measurements"
        :selected-id="selectedId"
        unit="mm"
        @select="handleSelect"
        @delete="handleDelete"
      />
    `,
  }),
};

/** Currently measuring */
export const Measuring: Story = {
  args: {
    isMeasuring: true,
  },
};
