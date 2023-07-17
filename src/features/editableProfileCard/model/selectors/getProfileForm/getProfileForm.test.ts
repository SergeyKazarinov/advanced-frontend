import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  const form = {
    name: 'Name',
    lastName: 'LastName',
    age: 22,
    city: 'Perm',
    country: CountryEnum.Russia,
    currency: CurrencyEnum.RUB,
    username: 'UserName',
  };

  test('should return profile form', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        form,
      },
    };
    expect(getProfileForm(state as IStateSchema)).toEqual(form);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileForm(state as IStateSchema)).toEqual(undefined);
  });
});
