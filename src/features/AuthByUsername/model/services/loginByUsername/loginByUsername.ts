import { IThunkConfig } from '@app/providers/StoreProvider';
import { IUser, userActions } from '@entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, IThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post<IUser>('/login', authData);
      if (!response.data) {
        throw new Error();
      }

      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('Error');
    }
  },
);

export default loginByUsername;
