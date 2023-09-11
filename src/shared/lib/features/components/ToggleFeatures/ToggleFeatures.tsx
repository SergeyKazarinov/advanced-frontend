import { FC, memo, ReactElement } from 'react';

import { IFeatureFlags } from '../../../../types';
import { getFeatureFlag } from '../../lib/setGetFeatures';

interface ToggleFeaturesProps {
  feature: keyof IFeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

const ToggleFeatures: FC<ToggleFeaturesProps> = ({ feature, on, off }) => {
  if (getFeatureFlag(feature)) {
    return on;
  }

  return off;
};

export default memo(ToggleFeatures);
