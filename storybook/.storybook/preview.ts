import type { Preview } from '@storybook/vue3-vite';

// Import global styles
import '../src/styles/dark-theme.scss';
import '../src/styles/global.scss';
import '../../pkg/altium/assets/client/styles/appStyles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      options: {
        dark: { name: 'dark', value: '#1c1c1e' }
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
      template: '<div class="storybook-wrapper is-dark-theme"><story /></div>',
    }),
  ],

  initialGlobals: {
    backgrounds: {
      value: 'dark'
    }
  }
};

export default preview;

