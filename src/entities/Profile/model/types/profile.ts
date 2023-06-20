import { CountryEnum, CurrencyEnum } from 'shared/const/common';

export interface IProfile {
  name: string;
  lastName: string;
  age: number;
  currency: CurrencyEnum;
  country: CountryEnum;
  city: string;
  username: string;
  avatar: string;
}

export interface IProfileSchema {
  data?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
