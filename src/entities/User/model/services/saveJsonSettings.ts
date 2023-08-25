import { IThunkConfig } from '@app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { setJsonSettingsMutation } from '../../api/userApi';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings/jsonSettings';
import { IJsonSettings } from '../types/jsonSettings';

const saveJsonSettings = createAsyncThunk<IJsonSettings, IJsonSettings, IThunkConfig<string>>(
  'user/saveJsonSettings',
  async (newJsonSettings, thunkAPI) => {
    const userData = getUserAuthData(thunkAPI.getState());
    const currentSettings = getJsonSettings(thunkAPI.getState());

    if (!userData) {
      return thunkAPI.rejectWithValue('Not user');
    }

    try {
      const response = await thunkAPI
        .dispatch(
          setJsonSettingsMutation({
            userId: userData.id,
            jsonSettings: {
              ...currentSettings,
              ...newJsonSettings,
            },
          }),
        )
        .unwrap();

      if (!response.jsonSettings) {
        return thunkAPI.rejectWithValue('');
      }

      return response.jsonSettings;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('Error');
    }
  },
);
export default saveJsonSettings;
