import { IStateSchema } from '@app/providers/StoreProvider';

export const getArticlePageHasMore = (state: IStateSchema) =>
  state.articlesPage?.hasMore;
