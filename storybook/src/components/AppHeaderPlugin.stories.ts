import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AppHeaderPlugin from './AppHeaderPlugin.vue';

const meta: Meta<typeof AppHeaderPlugin> = {
  title: 'Layout/AppHeaderPlugin',
  component: AppHeaderPlugin,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { icon: 'layers-16', tooltip: 'Layers' } };

export const WithLabel: Story = { args: { icon: 'download-16', label: 'Download' } };

export const Active: Story = { args: { icon: 'search-16', label: 'Search', isActive: true } };

export const WithBadge: Story = { args: { icon: 'component-16', label: 'BOM', badge: '12' } };
