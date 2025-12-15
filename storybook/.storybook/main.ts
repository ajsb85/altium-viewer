
const { resolve } = require('path');

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': resolve(__dirname, '../../pkg/altium/assets/client/js/components'),
      '@client': resolve(__dirname, '../../pkg/altium/assets/client'),
      '@mocks': resolve(__dirname, '../src/mocks'),
    };

    config.css = config.css || {};
    config.css.preprocessorOptions = {
      scss: {
        additionalData: `@use "sass:math";`,
      },
    };

    return config;
  },
};

module.exports = config;
