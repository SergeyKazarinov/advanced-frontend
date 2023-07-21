import { IStateSchema } from '@app/providers/StoreProvider';
import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  const data = {
    name: 'Name',
    lastName: 'LastName',
    age: 22,
    city: 'Perm',
    country: CountryEnum.Russia,
    currency: CurrencyEnum.RUB,
    username: 'UserName',
  };

  test('should return profile data', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as IStateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileData(state as IStateSchema)).toEqual(undefined);
  });
});
