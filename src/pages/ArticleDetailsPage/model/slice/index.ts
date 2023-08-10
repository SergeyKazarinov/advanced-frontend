import { combineReducers } from '@reduxjs/toolkit';

import { IArticleDetailsPageSchema } from '../types';

import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice';
import { articleDetailsPageRecommendationReducer } from './articleDetailsPageRecommendationSlice';

export const articleDetailsPageReducers =
  combineReducers<IArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationReducer,
  });
