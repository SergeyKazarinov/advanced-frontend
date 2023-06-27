import type { StorybookConfig } from '@storybook/react-webpack5';

const path = require('path');

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    config!.resolve!.alias = {
      ...config.resolve?.alias,
      '@entities': path.resolve(__dirname, '..', '..', 'src/entities'),
    };
    return config;
  },
};
export default config;
