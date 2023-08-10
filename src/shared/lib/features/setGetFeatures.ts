import { IFeatureFlags } from '@shared/types';

let featureFlags: IFeatureFlags;

export function setFeatureFlags(newFeatureFlags?: IFeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}

export const getFeatureFlag = (flag: keyof IFeatureFlags) => featureFlags[flag];
