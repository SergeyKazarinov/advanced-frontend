import { IStateSchema } from '@app/providers/StoreProvider';
import { getProfileFirstName } from './getProfileFirstName';

describe('getProfileFirstName', () => {
  test('should return profile error', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        data: {
          name: 'FirstName',
        },
      },
    };
    expect(getProfileFirstName(state as IStateSchema)).toEqual('FirstName');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileFirstName(state as IStateSchema)).toEqual('');
  });
});
