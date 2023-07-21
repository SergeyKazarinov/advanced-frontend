import { IStateSchema } from '@app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: { isLoading: true },
    };
    expect(getLoginIsLoading(state as IStateSchema)).toEqual(true);
  });
  test('should return false with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginIsLoading(state as IStateSchema)).toEqual(false);
  });
});
