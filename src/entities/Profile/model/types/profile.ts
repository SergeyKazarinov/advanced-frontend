import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';

export interface IProfile {
  id?: string;
  name?: string;
  lastName?: string;
  age?: number;
  currency?: CurrencyEnum;
  country?: CountryEnum;
  city?: string;
  username?: string;
  avatar?: string;
}
