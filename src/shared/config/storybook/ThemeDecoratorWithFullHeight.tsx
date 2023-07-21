import { StoryFn } from '@storybook/react';
import { ThemeEnum, ThemeProvider } from '@app/providers/ThemeProvider';

export const ThemeDecoratorWithFullHeight = (theme: ThemeEnum) => function (Story: StoryFn) {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`stories app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
