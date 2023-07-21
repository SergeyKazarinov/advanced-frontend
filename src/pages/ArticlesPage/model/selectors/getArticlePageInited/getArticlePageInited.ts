import { IStateSchema } from '@app/providers/StoreProvider';

export const getArticlePageInited = (state: IStateSchema) => state.articlesPage?.inited;
