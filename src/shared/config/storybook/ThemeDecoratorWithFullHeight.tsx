import { StoryFn } from '@storybook/react';
import { ThemeEnum, ThemeProvider } from 'app/providers/ThemeProvider';
import Modal from 'shared/ui/Modal/Modal';

export const ThemeDecoratorWithFullHeight = (theme: ThemeEnum) => function (Story: StoryFn) {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`stories ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
