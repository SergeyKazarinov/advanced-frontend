import { StoryFn } from '@storybook/react';

import { setFeatureFlags } from '@shared/lib/features';
import { getAllFeatureFlag } from '@shared/lib/features/lib/setGetFeatures';

export const NewDesignDecorator = (Story: StoryFn) => {
  setFeatureFlags({ ...getAllFeatureFlag(), isAppRedesigned: true });

  return (
    <div className="stories_redesigned">
      <Story />
    </div>
  );
};
