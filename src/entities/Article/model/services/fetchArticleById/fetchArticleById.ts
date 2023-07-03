import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from '../../types/article';

const fetchArticleById = createAsyncThunk<IArticle, string, IThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<IArticle>(`/articles/${articleId}`);
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
export default fetchArticleById;
