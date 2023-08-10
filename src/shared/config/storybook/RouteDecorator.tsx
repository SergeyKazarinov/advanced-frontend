import { BrowserRouter } from 'react-router-dom';
import { StoryFn } from '@storybook/react';

export const RouteDecorator = (Story: StoryFn) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
