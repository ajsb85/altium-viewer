import type { Preview } from '@storybook/vue3-vite';

// Import global styles
import '../src/styles/global.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: { name: 'light', value: '#ffffff' },
        dark: { name: 'dark', value: '#1a1a2e' },
        altium: { name: 'altium', value: '#2d2d3a' }
      }
    },
    viewport: {
      options: {
        desktop: { name: 'Desktop', styles: { width: '1280px', height: '800px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        mobile: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
      },
    },
  },

  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="storybook-wrapper"><story /></div>',
    }),
  ],

  initialGlobals: {
    backgrounds: {
      value: 'light'
    }
  }
};

export default preview;
