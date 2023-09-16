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
        { name: 'Light', class: ThemeEnum.LIGHT, color: '#dedede' },
        { name: 'Dark', class: ThemeEnum.DARK, color: '#0b0b1f' },
        { name: 'Pure', class: ThemeEnum.PURE, color: '#3b0f3b' },
        { name: 'Orange Redesigned', class: [ThemeEnum.PURE, 'app_redesigned'], color: '#F0C048' },
      ],
    },
    backgrounds: { disable: true },
  },

  decorators: [RouteDecorator, SuspenseDecorator, FeaturesFlagsDecorator({})],
};

export default preview;
