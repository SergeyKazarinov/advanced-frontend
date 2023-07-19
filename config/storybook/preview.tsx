import { Preview } from '@storybook/react';
import { ThemeEnum } from '../../src/app/providers/ThemeProvider';
import '../../src/app/styles/index.scss';
import { RouteDecorator, SuspenseDecorator, ThemeDecorator } from '../../src/shared/config/storybook';

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
    ThemeDecorator(ThemeEnum.LIGHT),
    RouteDecorator,
    SuspenseDecorator,
  ],
};

export default preview;
