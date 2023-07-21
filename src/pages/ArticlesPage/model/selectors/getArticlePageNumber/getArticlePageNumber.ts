import { IStateSchema } from '@app/providers/StoreProvider';

export const getArticlePageNumber = (state: IStateSchema) => state.articlesPage?.page || 1;
