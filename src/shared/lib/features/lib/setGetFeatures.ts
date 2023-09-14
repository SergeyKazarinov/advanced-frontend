import { LOCAL_STORAGE_DESIGN_KEY } from '@shared/const/localStorage';
import { IFeatureFlags } from '@shared/types';

let featureFlags: IFeatureFlags = {
  isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_DESIGN_KEY) === 'new',
  isArticleRatingEnabled: false,
  isCounterEnabled: false,
};

export function setFeatureFlags(newFeatureFlags?: IFeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}

export const getFeatureFlag = (flag: keyof IFeatureFlags) => featureFlags[flag];

export const getAllFeatureFlag = () => featureFlags;
