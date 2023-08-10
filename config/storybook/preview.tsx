import { Preview } from '@storybook/react';

import {
  RouteDecorator,
  SuspenseDecorator,
  ThemeDecorator,
} from '../../src/shared/config/storybook';
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
      ],
    },
    backgrounds: { disable: true },
  },

  decorators: [
    ThemeDecorator(ThemeEnum.LIGHT),
    RouteDecorator,
    SuspenseDecorator,
  ],
};

export default preview;
