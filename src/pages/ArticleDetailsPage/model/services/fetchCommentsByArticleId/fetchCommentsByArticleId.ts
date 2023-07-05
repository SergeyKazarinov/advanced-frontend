import { IComment } from '@entities/Comment';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';

const fetchCommentsByArticleId = createAsyncThunk<IComment[], string | undefined, IThunkConfig<string>>(
  'articleDetailsPage/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    if (!articleId) {
      return thunkAPI.rejectWithValue('error');
    }
    try {
      const response = await thunkAPI.extra.api.get<IComment[]>('/comments', {
        params: {
          articleId,
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
export default fetchCommentsByArticleId;
