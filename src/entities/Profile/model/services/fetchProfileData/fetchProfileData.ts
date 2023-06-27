import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';

const fetchProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<IProfile>('/profile');

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('Error');
    }
  },
);

export default fetchProfileData;
