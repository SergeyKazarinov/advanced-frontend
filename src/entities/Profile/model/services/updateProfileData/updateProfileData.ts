import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { rejects } from 'assert';
import { IProfile, ValidateProfileErrorEnum } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<ValidateProfileErrorEnum[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const formData = getProfileForm(thunkAPI.getState());

    const errors = validateProfileData(formData);
    if (errors.length) {
      return thunkAPI.rejectWithValue(errors);
    }
    try {
      const response = await thunkAPI.extra.api.put<IProfile>('/profile', formData);

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue([ValidateProfileErrorEnum.SERVER_ERROR]);
    }
  },
);

export default updateProfileData;
