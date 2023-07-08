import { IArticle } from '@entities/Article';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';

const fetchArticleList = createAsyncThunk<IArticle[], undefined, IThunkConfig<string>>(
  'articleDetailsPage/fetchArticleList',
  async (_, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<IArticle[]>('/articles', {
        params: {
          _expand: 'user',
        },
      });

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
export default fetchArticleList;
