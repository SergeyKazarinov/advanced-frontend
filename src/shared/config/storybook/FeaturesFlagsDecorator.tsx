import { StoryFn } from '@storybook/react';

import { setFeatureFlags } from '@shared/lib/features';
import { IFeatureFlags } from '@shared/types';

export const FeaturesFlagsDecorator = (features: IFeatureFlags) => (Story: StoryFn) => {
  setFeatureFlags(features);
  return <Story />;
};
