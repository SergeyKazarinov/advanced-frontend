import { StoryFn } from '@storybook/react';
import { ThemeEnum, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: ThemeEnum) => function (Story: StoryFn) {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`stories ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
