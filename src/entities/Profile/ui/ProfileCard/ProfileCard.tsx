import { CurrencyEnum, CurrencySelect } from '@entities/Currency';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TMods, classNames } from 'shared/lib/classNames';
import { TextComponent, TextAlignEnum, TextThemeEnum } from 'shared/ui/TextComponent';
import { CountryEnum, CountrySelect } from '@entities/Country';
import { Avatar } from 'shared/ui/Avatar';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { IProfile } from '../../model/types/profile';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: IProfile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean
  onChangeName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: CurrencyEnum) => void;
  onChangeCountry?: (country: CountryEnum) => void;
}

const ProfileCard: FC<ProfileCardProps> = ({
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
      <div className={classNames(s.profileCard, {}, [className, s.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(s.profileCard, {}, [className, s.error])}>
        <TextComponent
          theme={TextThemeEnum.ERROR}
          title={t('An error occurred while loading the profile')}
          text={t('Try refreshing the page')}
          align={TextAlignEnum.CENTER}
        />
      </div>
    );
  }

  const mods: TMods = {
    [s.editing]: !readonly,
  };

  return (
    <div className={classNames(s.profileCard, mods, [className])}>
      <div className={s.data}>
        <div className={s.avatarWrapper}>
          {data?.avatar && <Avatar src={data.avatar} />}
        </div>
        <Input
          value={data?.name || ''}
          placeholder={t('Your name')}
          className={s.input}
          onChange={onChangeName}
          readonly={readonly}
        />
        <Input
          value={data?.lastName || ''}
          placeholder={t('Your Lastname')}
          className={s.input}
          onChange={onChangeLastName}
          readonly={readonly}
        />
        <Input
          value={data?.age || 0}
          placeholder={t('Your age')}
          className={s.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city || ''}
          placeholder={t('Your city')}
          className={s.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username || ''}
          placeholder={t('Your username')}
          className={s.input}
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
        <CurrencySelect
          className={s.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}

        />
        <CountrySelect
          className={s.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}

        />
      </div>
    </div>
  );
};

export default ProfileCard;
