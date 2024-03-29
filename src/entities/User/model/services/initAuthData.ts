import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@app/providers/StoreProvider';
import { LOCAL_STORAGE_DESIGN_KEY, USER_LOCAL_STORAGE_KEY } from '@shared/const/localStorage';

import { getUserDataByIdQuery } from '../../api/userApi';
import { IUser } from '../types/user';

const initAuthData = createAsyncThunk<IUser, void, IThunkConfig<string>>('user/initAuthData', async (_, thunkAPI) => {
  const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  if (!userId) {
    return thunkAPI.rejectWithValue('Not user');
  }

  try {
    const response = await thunkAPI.dispatch(getUserDataByIdQuery(userId)).unwrap();

    localStorage.setItem(LOCAL_STORAGE_DESIGN_KEY, response.features?.isAppRedesigned ? 'new' : 'old');

    return response;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('Error');
  }
});
export default initAuthData;
