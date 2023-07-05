import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';

const fetchProfileData = createAsyncThunk<IProfile, string, IThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<IProfile>(`/profile/${profileId}`);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('Error');
    }
  },
);

export default fetchProfileData;
