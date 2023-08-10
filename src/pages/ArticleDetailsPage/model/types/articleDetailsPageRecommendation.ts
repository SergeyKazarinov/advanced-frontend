import { IArticle } from '@entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface IArticleDetailsRecommendationSchema
  extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;
}
