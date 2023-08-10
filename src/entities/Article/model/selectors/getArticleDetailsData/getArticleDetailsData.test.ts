import { IStateSchema } from '@app/providers/StoreProvider';

import { getArticleDetailsData } from './getArticleDetailsData';

const data = {
  title: 'Заголовок',
};

describe('getArticleDetailsIsData', () => {
  test('should return article details data', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as IStateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleDetailsData(state as IStateSchema)).toEqual(undefined);
  });
});
