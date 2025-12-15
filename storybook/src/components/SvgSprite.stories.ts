import type { Meta, StoryObj } from '@storybook/vue3-vite';
import SvgSprite from './SvgSprite.vue';

/**
 * SvgSprite - Legacy No-op Component
 *
 * The SVG sprite is now globally injected via .storybook/preview.ts.
 * This component exists only for backward compatibility.
 */
const meta: Meta<typeof SvgSprite> = {
  title: 'Core/SvgSprite',
  component: SvgSprite,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Legacy component - SVG sprite is now globally injected. This renders nothing visible.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default (renders hidden div)
 */
export const Default: Story = {};
