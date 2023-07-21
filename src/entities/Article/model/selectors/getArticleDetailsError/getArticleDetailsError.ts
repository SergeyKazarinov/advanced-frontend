import { IStateSchema } from '@app/providers/StoreProvider';

export const getArticleDetailsError = (state: IStateSchema) => state.articleDetails?.error;
