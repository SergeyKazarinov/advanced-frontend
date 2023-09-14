import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@app/providers/StoreProvider';

import { IArticle } from '../../types/article';

const fetchArticleById = createAsyncThunk<
  IArticle,
  string | undefined,
  IThunkConfig<string>
>('articleDetails/fetchArticleById', async (articleId, thunkAPI) => {
  try {
    if (!articleId) {
      throw new Error('Article not found');
    }

    const response = await thunkAPI.extra.api.get<IArticle>(
      `/articles/${articleId}`,
      {
        params: {
          _expand: 'user',
        },
      },
    );
    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('Error');
  }
});
export default fetchArticleById;
