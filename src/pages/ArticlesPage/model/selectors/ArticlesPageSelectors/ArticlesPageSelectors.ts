import { buildSelector } from '@shared/lib/store';

export const [useArticleItemById] = buildSelector((state, id: string) => state.articlesPage?.entities[id]);
