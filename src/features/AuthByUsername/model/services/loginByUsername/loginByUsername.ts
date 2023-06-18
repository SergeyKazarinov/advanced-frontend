import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';

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

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(i18n.t('The username or password you entered is incorrect'));
    }
  },
);

export default loginByUsername;
