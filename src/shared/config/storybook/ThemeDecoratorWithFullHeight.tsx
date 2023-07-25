// eslint-disable-next-line
import { ThemeProvider } from '@app/providers/ThemeProvider';
import { ThemeEnum } from '@shared/const/theme';
import { StoryFn } from '@storybook/react';

export const ThemeDecoratorWithFullHeight = (theme: ThemeEnum) => function (Story: StoryFn) {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`stories app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
