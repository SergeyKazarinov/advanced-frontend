import { ArticleViewEnum, IArticle } from '@entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface IArticlePageSchema extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;
  view: ArticleViewEnum;

  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  inited: boolean;
}
