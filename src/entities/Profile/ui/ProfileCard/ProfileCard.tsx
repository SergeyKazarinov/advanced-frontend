import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import TextComponent from 'shared/ui/TextComponent/TextComponent';
import Button, { ThemeButtonEnum } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(s.profileCard, {}, [className])}>
      <div className={s.header}>
        <TextComponent title={t('Profile')} />
        <Button
          theme={ThemeButtonEnum.OUTLINE}
          className={s.editBtn}
        >
          {t('Edit')}
        </Button>
      </div>
      <div className={s.data}>
        <Input
          value={data?.name || ''}
          placeholder={t('Your name')}
          className={s.input}
        />
        <Input
          value={data?.lastName || ''}
          placeholder={t('Your Lastname')}
          className={s.input}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
