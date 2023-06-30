import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { TextComponent } from 'shared/ui/TextComponent';
import { classNames } from 'shared/lib/classNames';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from '@entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ThemeButtonEnum } from 'shared/ui/Button';
import s from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(s.profilePageHeader, {}, [className])}>
      <TextComponent title={t('Profile')} />
      {readonly
        ? (
          <Button
            theme={ThemeButtonEnum.OUTLINE}
            className={s.editBtn}
            onClick={onEdit}
          >
            {t('Edit')}
          </Button>
        )
        : (
          <>
            <Button
              theme={ThemeButtonEnum.OUTLINE_RED}
              className={s.editBtn}
              onClick={onCancelEdit}
            >
              {t('Cancel')}
            </Button>
            <Button
              theme={ThemeButtonEnum.OUTLINE}
              className={s.saveBtn}
              onClick={onSave}
            >
              {t('Save')}
            </Button>
          </>
        )}
    </div>
  );
};

export default ProfilePageHeader;
