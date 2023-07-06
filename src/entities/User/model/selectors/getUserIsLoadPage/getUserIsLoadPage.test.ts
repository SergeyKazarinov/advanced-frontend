import { USER_DATA } from '@entities/User/utils/userData';
import { IStateSchema } from 'app/providers/StoreProvider';
import { getUserIsLoadPage } from './getUserIsLoadPage';

describe('getUserIsLoadPage selectors', () => {
  test('should return isLoadPage', () => {
    const state: DeepPartial<IStateSchema> = {
      user: USER_DATA,
    };
    expect(getUserIsLoadPage(state as IStateSchema)).toEqual(false);
  });
});
