import { Suspense } from 'react';
import { StoryFn } from '@storybook/react';

export const SuspenseDecorator = (Story: StoryFn) => (
  <div className="stories">
    <Suspense>
      <Story />
    </Suspense>
  </div>
);
