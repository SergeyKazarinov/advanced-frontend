import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { TextComponent } from 'shared/ui/TextComponent';
import { classNames } from 'shared/lib/classNames';
import { useSelector } from 'react-redux';
import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from '@entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ThemeButtonEnum } from 'shared/ui/Button';
import { getUserAuthData } from '@entities/User';
import { HStack } from 'shared/ui/Stack';

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const readonly = useSelector(getProfileReadonly);
  const canEdit = authData?.id === profileData?.id;

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
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <TextComponent title={t('Profile')} />
      {canEdit && (
        <div>
          {readonly
            ? (
              <Button
                theme={ThemeButtonEnum.OUTLINE}
                onClick={onEdit}
              >
                {t('Edit')}
              </Button>
            )
            : (
              <HStack>
                <Button
                  theme={ThemeButtonEnum.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  theme={ThemeButtonEnum.OUTLINE}
                  onClick={onSave}
                >
                  {t('Save')}
                </Button>
              </HStack>
            )}
        </div>
      )}

    </HStack>
  );
};

export default ProfilePageHeader;
