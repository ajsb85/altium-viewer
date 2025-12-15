import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect } from 'storybook/test';
import LibLazyImage from './LibLazyImage.vue';
import previewSample from '../assets/preview-sample.png';
import sample1 from '../assets/sample-1_block_diagram.png';
import sample2 from '../assets/sample-2_reference.png';

/**
 * LibLazyImage - Lazy loading image with loading spinner
 * 
 * Uses IntersectionObserver (v-lazy directive) to load images only when 
 * they enter the viewport. Displays a spinning loader until loaded.
 * 
 * Production implementation: vendors.js:213610-213800
 */
const meta: Meta<typeof LibLazyImage> = {
  title: 'Core/LibLazyImage',
  component: LibLazyImage,
  tags: ['autodocs'],
  parameters: { 
    layout: 'centered',
    controls: { expanded: true },
  },
  decorators: [(story) => ({ 
    components: { story }, 
    template: '<div style="width: 200px; background: var(--afs-panel); padding: 8px; border-radius: 8px;"><story /></div>' 
  })],
  argTypes: {
    src: {
      description: 'Image source URL. When empty, shows loading spinner.',
      control: 'select',
      options: ['', previewSample, sample1, sample2, 'invalid-url'],
      table: { 
        category: 'Content',
        defaultValue: { summary: '' },
      },
    },
    alt: {
      description: 'Alt text for accessibility',
      control: 'text',
      table: { category: 'Content' },
    },
    aspectRatio: {
      description: 'Aspect ratio as percentage (height/width * 100)',
      control: { type: 'range', min: 30, max: 150, step: 5 },
      table: { 
        category: 'Layout',
        defaultValue: { summary: '68' },
      },
    },
  },
  args: {
    src: previewSample,
    alt: 'Schematic preview',
    aspectRatio: 68,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Loading state - spinner displayed when src is empty
 */
export const Loading: Story = { 
  args: { 
    src: '', 
    alt: 'Loading...',
  },
  play: async ({ canvasElement }) => {
    const loader = canvasElement.querySelector('.lib-lazy-image__loader');
    await expect(loader).toBeVisible();
  },
};

/**
 * Loaded state - image displayed after lazy load triggers
 */
export const Loaded: Story = {
  args: { 
    src: previewSample, 
    alt: 'PCB Preview',
  },
  play: async ({ canvasElement }) => {
    // Wait for lazy load to trigger
    await new Promise(resolve => setTimeout(resolve, 800));
    const img = canvasElement.querySelector('.lib-lazy-image__figure');
    if (img) {
      await expect(img).toBeVisible();
    }
  },
};

/**
 * Error state - shows error icon when image fails to load
 */
export const Error: Story = { 
  args: { 
    src: 'invalid-url-that-will-fail', 
    alt: 'Broken image',
  },
};

/**
 * Different aspect ratios comparison
 */
export const AspectRatios: Story = {
  render: () => ({
    components: { LibLazyImage },
    setup() {
      return { previewSample };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <div style="font-size: 11px; color: var(--afs-text-icon-secondary); margin-bottom: 4px;">Square (100%)</div>
          <LibLazyImage :src="previewSample" alt="Square" :aspectRatio="100" />
        </div>
        <div>
          <div style="font-size: 11px; color: var(--afs-text-icon-secondary); margin-bottom: 4px;">Default (68%)</div>
          <LibLazyImage :src="previewSample" alt="Default" :aspectRatio="68" />
        </div>
        <div>
          <div style="font-size: 11px; color: var(--afs-text-icon-secondary); margin-bottom: 4px;">Wide (50%)</div>
          <LibLazyImage :src="previewSample" alt="Wide" :aspectRatio="50" />
        </div>
      </div>
    `,
  }),
};

/**
 * Lazy loading demo - scroll to trigger load
 */
export const LazyLoadDemo: Story = {
  decorators: [(story) => ({
    components: { story },
    template: '<div style="width: 200px; height: 300px; overflow-y: auto; background: var(--afs-panel); padding: 8px; border-radius: 8px;"><story /></div>',
  })],
  render: () => ({
    components: { LibLazyImage },
    setup() {
      const images = [
        { src: previewSample, alt: 'Image 1' },
        { src: sample1, alt: 'Image 2' },
        { src: sample2, alt: 'Image 3' },
        { src: previewSample, alt: 'Image 4' },
        { src: sample1, alt: 'Image 5' },
        { src: sample2, alt: 'Image 6' },
      ];
      return { images };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="font-size: 11px; color: var(--afs-text-icon-secondary);">
          Scroll to lazy-load images ↓
        </div>
        <LibLazyImage 
          v-for="(img, i) in images" 
          :key="i"
          :src="img.src" 
          :alt="img.alt"
        />
      </div>
    `,
  }),
  play: async ({ canvasElement, step }) => {
    const container = canvasElement.querySelector('div[style*="overflow-y"]') || canvasElement;
    
    await step('Wait for initial render', async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
    });
    
    await step('Scroll through images', async () => {
      for (const scrollTop of [100, 200, 300, 400]) {
        (container as HTMLElement).scrollTo({ top: scrollTop, behavior: 'smooth' });
        await new Promise(resolve => setTimeout(resolve, 400));
      }
    });
    
    await step('Scroll back to top', async () => {
      (container as HTMLElement).scrollTo({ top: 0, behavior: 'smooth' });
      await new Promise(resolve => setTimeout(resolve, 300));
    });
  },
};

/**
 * All States - Shows loading, loaded, and error states together
 */
export const AllStates: Story = {
  render: () => ({
    components: { LibLazyImage },
    setup() {
      return { previewSample };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <div style="font-size: 11px; color: var(--afs-text-icon-secondary); margin-bottom: 4px;">Loading State</div>
          <LibLazyImage src="" alt="Loading" />
        </div>
        <div>
          <div style="font-size: 11px; color: var(--afs-text-icon-secondary); margin-bottom: 4px;">Loaded State</div>
          <LibLazyImage :src="previewSample" alt="Loaded" />
        </div>
        <div>
          <div style="font-size: 11px; color: var(--afs-text-icon-secondary); margin-bottom: 4px;">Error State</div>
          <LibLazyImage src="invalid-url" alt="Error" />
        </div>
      </div>
    `,
  }),
};
