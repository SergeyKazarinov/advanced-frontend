import { EntityState } from '@reduxjs/toolkit';

import {
  ArticleSortFieldEnum,
  ArticleTypeEnum,
  ArticleViewEnum,
  IArticle,
} from '@entities/Article';
import { TSortOrder } from '@shared/types';

export interface IArticlePageSchema extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;
  view: ArticleViewEnum;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  inited: boolean;

  order: TSortOrder;
  sort: ArticleSortFieldEnum;
  search: string;
  type: ArticleTypeEnum;
}
