import { IStateSchema } from '@app/providers/StoreProvider';
import { ARTICLE } from '@entities/Article';
import { getCanEditArticle } from './getCanEditArticle';

const data: DeepPartial<IStateSchema> = {
  user: {
    authData: {
      id: '1',
      username: 'username',
    },
  },
  articleDetails: {
    data: ARTICLE,
  },
};

describe('getCanEditArticle comment selectors', () => {
  test('should return boolean true', () => {
    const state: DeepPartial<IStateSchema> = data;
    expect(getCanEditArticle(state as IStateSchema)).toEqual(true);
  });
  test('should return fasle. Without user', () => {
    const state: DeepPartial<IStateSchema> = { ...data, user: {} };
    expect(getCanEditArticle(state as IStateSchema)).toEqual(false);
  });

  test('should return fasle. Without articleDetails', () => {
    const state: DeepPartial<IStateSchema> = { ...data, articleDetails: {} };
    expect(getCanEditArticle(state as IStateSchema)).toEqual(false);
  });

  test('should return fasle. difference ids', () => {
    const state: DeepPartial<IStateSchema> = {
      ...data,
      user: {
        authData: {
          id: '2',
        },
      },
    };
    expect(getCanEditArticle(state as IStateSchema)).toEqual(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getCanEditArticle(state as IStateSchema)).toEqual(false);
  });
});
