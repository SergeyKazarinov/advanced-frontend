import { IProfile } from '@entities/Profile';

import { ValidateProfileErrorEnum } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: IProfile) => {
  if (!profile) {
    return [ValidateProfileErrorEnum.NO_DATA];
  }

  const { name, lastName, age, country, city } = profile;

  const errors: ValidateProfileErrorEnum[] = [];

  if (!name || !lastName) {
    errors.push(ValidateProfileErrorEnum.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileErrorEnum.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileErrorEnum.INCORRECT_COUNTRY);
  }

  if (!city) {
    errors.push(ValidateProfileErrorEnum.INCORRECT_CITY);
  }

  return errors;
};
