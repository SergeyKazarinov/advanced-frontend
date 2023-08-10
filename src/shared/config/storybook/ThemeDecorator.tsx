// eslint-disable-next-line
import { ThemeProvider } from '@app/providers/ThemeProvider';
import { ThemeEnum } from '@shared/const/theme';
import { StoryFn } from '@storybook/react';

export const ThemeDecorator = (theme: ThemeEnum) =>
  function (Story: StoryFn) {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`stories ${theme}`}>
          <Story />
        </div>
      </ThemeProvider>
    );
  };
