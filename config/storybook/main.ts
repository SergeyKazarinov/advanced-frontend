import type { StorybookConfig } from '@storybook/react-webpack5';

const path = require('path');

const config: StorybookConfig = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false, // 👈 disable the backgrounds addon
      },
    },
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    'storybook-addon-themes',
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
      '@features': path.resolve(__dirname, '..', '..', 'src/features'),
      '@shared': path.resolve(__dirname, '..', '..', 'src/shared'),
      '@app': path.resolve(__dirname, '..', '..', 'src/app'),
      '@widgets': path.resolve(__dirname, '..', '..', 'src/widgets'),
      '@pages': path.resolve(__dirname, '..', '..', 'src/pages'),
    };
    return config;
  },
};
export default config;
