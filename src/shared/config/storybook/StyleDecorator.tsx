import { StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const StyleDecorator = (Story: StoryFn) => <ThemeProvider><Story /></ThemeProvider>;
