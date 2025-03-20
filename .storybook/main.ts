import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y'
  ],

  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },

  features: {
    backgroundsStoryGlobals: true
  },

  staticDirs: [{ from: '../lib/assets', to: '/lib/assets' }],

  viteFinal: async (config) => {
    if (process.env.GITHUB_ACTIONS) {
      config.base = '/core/';
    }
    return config;
  }
};

export default config;
