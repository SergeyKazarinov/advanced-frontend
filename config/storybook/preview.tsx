import { Preview } from '@storybook/react';

import { FeaturesFlagsDecorator, RouteDecorator, SuspenseDecorator } from '../../src/shared/config/storybook';
import { ThemeEnum } from '../../src/shared/const/theme';

import '../../src/app/styles/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: ThemeEnum.LIGHT, color: '#dedede' },
        { name: 'dark', class: ThemeEnum.DARK, color: '#0b0b1f' },
        { name: 'pure', class: ThemeEnum.PURE, color: '#3b0f3b' },
        { name: 'lightRedesigned', class: [ThemeEnum.LIGHT, 'app_redesigned'], color: '#eff5f6ce' },
        { name: 'darkRedesigned', class: [ThemeEnum.DARK, 'app_redesigned'], color: '#0c1214' },
        { name: 'orangeRedesigned', class: [ThemeEnum.PURE, 'app_redesigned'], color: '#F0C048' },
      ],
    },
    backgrounds: { disable: true },
  },

  decorators: [RouteDecorator, SuspenseDecorator, FeaturesFlagsDecorator({})],
};

export default preview;
