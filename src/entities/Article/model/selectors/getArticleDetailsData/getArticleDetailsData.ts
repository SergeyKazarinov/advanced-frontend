import { IStateSchema } from '@app/providers/StoreProvider';
import { buildSelector } from '@shared/lib/store';

export const getArticleDetailsData = (state: IStateSchema) => state.articleDetails?.data;

export const [useArticleDetailsData] = buildSelector((state) => state.articleDetails?.data);
