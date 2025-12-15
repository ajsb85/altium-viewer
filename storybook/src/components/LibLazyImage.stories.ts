import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LibLazyImage from './LibLazyImage.vue';

const meta: Meta<typeof LibLazyImage> = {
  title: 'Core/LibLazyImage',
  component: LibLazyImage,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(story) => ({ components: { story }, template: '<div style="width: 200px;"><story /></div>' })],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = { args: { src: '', alt: 'Loading...' } };

export const Loaded: Story = {
  args: { src: 'https://placehold.co/200x136/3a3a3c/ffffff?text=PCB', alt: 'PCB Preview' },
};

export const Error: Story = { args: { src: 'invalid-url', alt: 'Broken image' } };
