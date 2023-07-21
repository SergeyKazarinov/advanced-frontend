import { IStateSchema } from '@app/providers/StoreProvider';

export const getArticlePageLimit = (state: IStateSchema) => state.articlesPage?.limit || 9;
