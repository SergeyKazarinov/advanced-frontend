import { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator';
import { ThemeEnum } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(ThemeEnum.LIGHT),
    RouteDecorator,
  ],
};

export default preview;
