import { StoryFn } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: ThemeEnum) => function (Story: StoryFn) {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
