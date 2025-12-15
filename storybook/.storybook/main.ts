import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import type { StorybookConfig } from '@storybook/vue3-vite';

const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Storybook 10 Configuration
 * 
 * Implements features from NEWS.md:
 * - Tag filtering with exclusion and configuration
 * - ESM-only builds
 */
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-mcp',
    '@chromatic-com/storybook',
  ],
  staticDirs: [
    { from: '../../pkg/altium/assets/client', to: '/' },
    { from: '../src/assets', to: '/assets' },
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {},

  // Storybook 10: Tag filtering configuration (from NEWS.md)
  // Tags can be used in stories with tags: ['experimental']
  // and filtered in the sidebar UI

  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': resolve(__dirname, '../../pkg/altium/assets/client/js/components'),
      '@client': resolve(__dirname, '../../pkg/altium/assets/client'),
      '@mocks': resolve(__dirname, '../src/mocks'),
      'storybook/internal/theming': resolve(__dirname, '../node_modules/storybook/dist/theming/index.js'),
      'storybook/internal/theming/create': resolve(__dirname, '../node_modules/storybook/dist/theming/create.js'),
      '@assets': resolve(__dirname, '../../pkg/altium/assets/client/assets'),
      'use-sync-external-store/shim/index.js': join(dirname(require.resolve('use-sync-external-store')), 'shim/index.js'),
    };

    config.css = config.css || {};
    config.css.preprocessorOptions = {
        scss: {
            additionalData: `@use "sass:math";`,
        },
    };

    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
        ...(config.optimizeDeps.include || []),
        'use-sync-external-store/shim/index.js',
        'use-sync-external-store/shim',
    ];
    config.optimizeDeps.exclude = [
        ...(config.optimizeDeps.exclude || []),
        'storybook',
        '@storybook/blocks',
        '@storybook/vue3',
        '@storybook/vue3-vite',
    ];

    return config;
  },
};

export default config;
