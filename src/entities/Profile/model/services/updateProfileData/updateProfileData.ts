import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { IProfile, ValidateProfileErrorEnum } from '../../types/profile';
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
      const response = await thunkAPI.extra.api.put<IProfile>(`/profile/${formData?.id}`, formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue([ValidateProfileErrorEnum.SERVER_ERROR]);
    }
  },
);

export default updateProfileData;
