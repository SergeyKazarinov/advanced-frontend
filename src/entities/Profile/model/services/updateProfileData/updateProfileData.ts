import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const formData = getProfileForm(thunkAPI.getState());

    try {
      const response = await thunkAPI.extra.api.put<IProfile>('/profile', formData);

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('Error');
    }
  },
);

export default updateProfileData;
