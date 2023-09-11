import { IThunkConfig } from '@app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { updateFeatureFlagsMutation, UpdateFeatureFlagsOptions } from '../api/featureFlagsApi';
import { getAllFeatureFlag } from '../lib/setGetFeatures';

export const updateFeatureFlags = createAsyncThunk<void, UpdateFeatureFlagsOptions, IThunkConfig<string>>(
  'user/updateFeatureFlags',
  // eslint-disable-next-line
  async ({ userId, features }, thunkAPI) => {
    try {
      await thunkAPI.dispatch(
        updateFeatureFlagsMutation({
          userId,
          features: { ...getAllFeatureFlag(), ...features },
        }),
      );

      window.location.reload();
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('');
    }
  },
);
