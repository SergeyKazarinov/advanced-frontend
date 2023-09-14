import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { ProfileCard } from '@entities/Profile';
import { classNames } from '@shared/lib/classNames';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@shared/lib/hooks/useInitialEffect';
import { DynamicModuleLoader, TReducerList } from '@shared/lib/ui/DynamicModuleLoader';
import { TextComponent, TextThemeEnum } from '@shared/ui/deprecated/TextComponent';
import { VStack } from '@shared/ui/redesigned/Stack';

import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import fetchProfileData from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ValidateProfileErrorEnum } from '../../model/types/editableProfileCardSchema';
import EditableProfileCardHeader from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
  className?: string;
  profileId?: string;
}

const reducers: TReducerList = {
  profile: profileReducer,
};

const EditableProfileCard: FC<EditableProfileCardProps> = ({ className, profileId }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const form = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileErrorEnum.SERVER_ERROR]: t('Server error'),
    [ValidateProfileErrorEnum.INCORRECT_AGE]: t('Incorrect age'),
    [ValidateProfileErrorEnum.INCORRECT_COUNTRY]: t('Incorrect country'),
    [ValidateProfileErrorEnum.INCORRECT_USER_DATA]: t('Incorrect user data'),
    [ValidateProfileErrorEnum.INCORRECT_CITY]: t('Incorrect city'),
    [ValidateProfileErrorEnum.NO_DATA]: t('No data'),
  };

  useInitialEffect(() => {
    if (profileId) {
      dispatch(fetchProfileData(profileId));
    }
  });

  const onChangeName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ name: value || '' }));
    },
    [dispatch],
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastName: value || '' }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency: CurrencyEnum) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country: CountryEnum) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack max className={classNames('', {}, [className])}>
        <EditableProfileCardHeader />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <TextComponent
              key={err}
              theme={TextThemeEnum.ERROR}
              text={validateErrorTranslates[err]}
              data-testid="EditableProfileCard.Error"
            />
          ))}
        <ProfileCard
          data={form}
          error={error}
          isLoading={isLoading}
          onChangeName={onChangeName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </VStack>
    </DynamicModuleLoader>
  );
};

export default memo(EditableProfileCard);
