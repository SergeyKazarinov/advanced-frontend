import { IStateSchema } from '@app/providers/StoreProvider';
import { USER_DATA } from '../../../utils/userData';
import { getUserIsLoadPage } from './getUserIsLoadPage';

describe('getUserIsLoadPage selectors', () => {
  test('should return isLoadPage', () => {
    const state: DeepPartial<IStateSchema> = {
      user: USER_DATA,
    };
    expect(getUserIsLoadPage(state as IStateSchema)).toEqual(false);
  });
});
