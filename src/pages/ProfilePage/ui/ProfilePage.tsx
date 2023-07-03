import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import {
  ProfileCard,
  ValidateProfileErrorEnum,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
} from '@entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { TextComponent, TextThemeEnum } from 'shared/ui/TextComponent';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const reducers: TReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
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
    dispatch(fetchProfileData());
  });

  const onChangeName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ name: value || '' }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastName: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: CurrencyEnum) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: CountryEnum) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfilePageHeader />
      {validateErrors?.length && validateErrors.map((err) => (
        <TextComponent key={err} theme={TextThemeEnum.ERROR} text={validateErrorTranslates[err]} />
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
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
