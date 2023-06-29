import { IProfile, ValidateProfileErrorEnum } from '../../types/profile';

export const validateProfileData = (profile?: IProfile) => {
  if (!profile) {
    return [ValidateProfileErrorEnum.NO_DATA];
  }

  const {
    name, lastName, age, country,
  } = profile;

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

  return errors;
};
