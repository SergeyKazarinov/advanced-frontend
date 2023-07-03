import { IComment } from '@entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface IArticleDetailsCommentSchema extends EntityState<IComment> {
  isLoading?: boolean;
  error?: string;
}
