import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { IUser, userActions } from '../../../../../entities/User';

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

      thunkAPI.dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('Error');
    }
  },
);

export default loginByUsername;