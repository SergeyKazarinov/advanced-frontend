import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CountrySelect } from '@entities/Country';
import { CurrencySelect } from '@entities/Currency';
import { classNames } from '@shared/lib/classNames';
import { Avatar } from '@shared/ui/redesigned/Avatar';
import { Card } from '@shared/ui/redesigned/Card';
import { Input } from '@shared/ui/redesigned/Input';
import { Skeleton } from '@shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { ProfileCardProps } from '../ProfileCard';

import s from './ProfileCardRedesigned.module.scss';

const ProfileCardRedesigned: FC<ProfileCardProps> = ({
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
      <Card padding="24" max>
        <VStack gap="32">
          <HStack max justify="center">
            <Skeleton border="100%" width={128} height={128} />
          </HStack>
          <HStack gap="32" max>
            <VStack gap="16" max>
              <Skeleton width="100%" height={30} />
              <Skeleton width="100%" height={30} />
              <Skeleton width="100%" height={30} />
              <Skeleton width="100%" height={30} />
            </VStack>
            <VStack gap="16" max>
              <Skeleton width="100%" height={30} />
              <Skeleton width="100%" height={30} />
              <Skeleton width="100%" height={30} />
              <Skeleton width="100%" height={30} />
            </VStack>
          </HStack>
        </VStack>
      </Card>
    );
  }

  if (error) {
    return (
      <HStack max justify="center" className={classNames(s.profileCardRedesigned, {}, [className, s.error])}>
        <TextComponent
          variant="error"
          title={t('An error occurred while loading the profile')}
          text={t('Try refreshing the page')}
          align="center"
        />
      </HStack>
    );
  }

  return (
    <Card max padding="24" className={classNames(s.profileCardRedesigned, {}, [className])}>
      {data?.avatar && (
        <HStack justify="center">
          <Avatar src={data.avatar} size={128} />
        </HStack>
      )}
      <HStack gap="24" max>
        <VStack gap="16" max>
          <Input
            value={data?.name || ''}
            label={t('Name')}
            onChange={onChangeName}
            readonly={readonly}
            data-testid="ProfileCard.FirstName"
          />
          <Input
            value={data?.lastName || ''}
            label={t('Lastname')}
            onChange={onChangeLastName}
            readonly={readonly}
            data-testid="ProfileCard.LastName"
          />
          <Input value={data?.age || 0} label={t('Age')} onChange={onChangeAge} readonly={readonly} />
          <Input value={data?.city || ''} label={t('City')} onChange={onChangeCity} readonly={readonly} />
        </VStack>
        <VStack gap="16" max>
          <Input value={data?.username || ''} label={t('Username')} onChange={onChangeUsername} readonly={readonly} />
          <Input
            value={data?.avatar || ''}
            label={t('Avatar')}
            className={s.input}
            onChange={onChangeAvatar}
            readonly={readonly}
          />
          <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
          <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
        </VStack>
      </HStack>
    </Card>
  );
};

export default ProfileCardRedesigned;
