import { IStateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsData = (state: IStateSchema) => state.articleDetails?.data;
