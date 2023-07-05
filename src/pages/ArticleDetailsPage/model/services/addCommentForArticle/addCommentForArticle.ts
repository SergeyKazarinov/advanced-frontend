import { getArticleDetailsData } from '@entities/Article';
import { IComment } from '@entities/Comment';
import { getUserAuthData } from '@entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import fetchCommentsByArticleId from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

const addCommentForArticle = createAsyncThunk<IComment, string, IThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const userData = getUserAuthData(thunkAPI.getState());
    const article = getArticleDetailsData(thunkAPI.getState());

    if (!userData || !text || !article) {
      return thunkAPI.rejectWithValue('No data');
    }
    try {
      const response = await thunkAPI.extra.api.post<IComment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      });
      if (!response.data) {
        throw new Error();
      }

      thunkAPI.dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('Error');
    }
  },
);

export default addCommentForArticle;
