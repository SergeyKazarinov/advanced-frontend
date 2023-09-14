import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { CountrySelect } from '@entities/Country';
import { CurrencySelect } from '@entities/Currency';
import { classNames, TMods } from '@shared/lib/classNames';
import { Avatar } from '@shared/ui/deprecated/Avatar';
import { Input } from '@shared/ui/deprecated/Input';
import { Loader } from '@shared/ui/deprecated/Loader';
import { TextAlignEnum, TextComponent, TextThemeEnum } from '@shared/ui/deprecated/TextComponent';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';

import { ProfileCardProps } from '../ProfileCard';

import s from './ProfileCardDeprecated.module.scss';

const ProfileCardDeprecated: FC<ProfileCardProps> = ({
  className,
  data,
  error,
  isLoading,
  readonly,
  onChangeName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack max justify="center" className={classNames(s.profileCard, {}, [className, s.loading])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack max justify="center" className={classNames(s.profileCard, {}, [className, s.error])}>
        <TextComponent
          theme={TextThemeEnum.ERROR}
          title={t('An error occurred while loading the profile')}
          text={t('Try refreshing the page')}
          align={TextAlignEnum.CENTER}
        />
      </HStack>
    );
  }

  const mods: TMods = {
    [s.editing]: !readonly,
  };

  return (
    <VStack max className={classNames(s.profileCard, mods, [className])}>
      <HStack justify="center" max>
        {data?.avatar && <Avatar src={data.avatar} />}
      </HStack>
      <Input
        value={data?.name || ''}
        placeholder={t('Your name')}
        onChange={onChangeName}
        readonly={readonly}
        data-testid="ProfileCard.FirstName"
      />
      <Input
        value={data?.lastName || ''}
        placeholder={t('Your Lastname')}
        onChange={onChangeLastName}
        readonly={readonly}
        data-testid="ProfileCard.LastName"
      />
      <Input value={data?.age || 0} placeholder={t('Your age')} onChange={onChangeAge} readonly={readonly} />
      <Input value={data?.city || ''} placeholder={t('Your city')} onChange={onChangeCity} readonly={readonly} />
      <Input
        value={data?.username || ''}
        placeholder={t('Your username')}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar || ''}
        placeholder={t('Your avatar')}
        className={s.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
      <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
    </VStack>
  );
};

export default ProfileCardDeprecated;
