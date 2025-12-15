import type { Meta, StoryObj } from '@storybook/vue3';
import AppHeader from './AppHeader.vue';

const meta = {
  title: 'Components/AppHeader',
  component: AppHeader,
  tags: ['autodocs'],
  argTypes: {
    views: { control: 'object' },
    globalPlugins: { control: 'object' },
    localPlugins: { control: 'object' },
  },
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockViews = [
  { id: 'pcb', text: 'PCB', icon: 'layer', isActive: true },
  { id: 'sch', text: 'Schematic', icon: 'file', isActive: false },
  { id: 'bom', text: 'BOM', icon: 'list', isActive: false },
];

const mockGlobalPlugins = [
  { id: 'search', icon: 'search', hasButton: true },
  { id: 'help', icon: 'help', hasButton: true },
];

const mockLocalPlugins = [
  { id: 'layers', text: 'Layers', icon: 'layers', localType: 'primary', hasButton: true },
  { id: 'settings', icon: 'settings', localType: 'secondary', hasButton: true },
];

export const Default: Story = {
  args: {
    views: mockViews,
    globalPlugins: mockGlobalPlugins,
    localPlugins: mockLocalPlugins,
  },
};
