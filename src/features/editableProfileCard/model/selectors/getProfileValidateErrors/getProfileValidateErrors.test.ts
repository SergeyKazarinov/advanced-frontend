import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileErrorEnum } from '../../types/editableProfileCardSchema';

describe('getProfileValidateErrors', () => {
  test('should return profile validateError', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        validateError: [
          ValidateProfileErrorEnum.NO_DATA,
          ValidateProfileErrorEnum.INCORRECT_AGE,
        ],
      },
    };
    expect(getProfileValidateErrors(state as IStateSchema)).toEqual([
      ValidateProfileErrorEnum.NO_DATA,
      ValidateProfileErrorEnum.INCORRECT_AGE,
    ]);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileValidateErrors(state as IStateSchema)).toEqual(undefined);
  });
});
