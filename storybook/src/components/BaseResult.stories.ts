import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseResult from './BaseResult.vue';

const meta: Meta<typeof BaseResult> = {
  title: 'Search/BaseResult',
  component: BaseResult,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({ components: { story }, template: '<div style="width: 280px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { title: 'U1 - ATmega328P', subtitle: 'Component', icon: 'component-16' } };
export const WithBadge: Story = { args: { title: 'VCC', subtitle: 'Net', icon: 'net-16', badge: '24 pins' } };
export const Highlighted: Story = { args: { title: 'ATmega328P', highlightQuery: 'mega', icon: 'component-16' } };
export const Selected: Story = { args: { title: 'C1 - 100nF', isSelected: true } };
