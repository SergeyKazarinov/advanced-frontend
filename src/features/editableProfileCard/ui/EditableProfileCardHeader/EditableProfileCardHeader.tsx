import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@entities/User';
import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Button as ButtonDeprecated, ThemeButtonEnum } from '@shared/ui/deprecated/Button';
import { TextComponent as TextComponentDeprecated } from '@shared/ui/deprecated/TextComponent';
import { Button } from '@shared/ui/redesigned/Button';
import { Card } from '@shared/ui/redesigned/Card';
import { HStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import updateProfileData from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
  className?: string;
}

const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = ({ className }) => {
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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card padding="24" max>
          <HStack max justify="between" className={classNames('', {}, [className])}>
            <TextComponent title={t('Profile')} />
            {canEdit && (
              <div>
                {readonly ? (
                  <Button variant="outline" onClick={onEdit} data-testid="EditableProfileCardHeader.EditButton">
                    {t('Edit')}
                  </Button>
                ) : (
                  <HStack>
                    <Button color="error" onClick={onCancelEdit} data-testid="EditableProfileCardHeader.CancelButton">
                      {t('Cancel')}
                    </Button>
                    <Button
                      variant="outline"
                      color="success"
                      onClick={onSave}
                      data-testid="EditableProfileCardHeader.SaveButton"
                    >
                      {t('Save')}
                    </Button>
                  </HStack>
                )}
              </div>
            )}
          </HStack>
        </Card>
      }
      off={
        <HStack max justify="between" className={classNames('', {}, [className])}>
          <TextComponentDeprecated title={t('Profile')} />
          {canEdit && (
            <div>
              {readonly ? (
                <ButtonDeprecated
                  theme={ThemeButtonEnum.OUTLINE}
                  onClick={onEdit}
                  data-testid="EditableProfileCardHeader.EditButton"
                >
                  {t('Edit')}
                </ButtonDeprecated>
              ) : (
                <HStack>
                  <ButtonDeprecated
                    theme={ThemeButtonEnum.OUTLINE_RED}
                    onClick={onCancelEdit}
                    data-testid="EditableProfileCardHeader.CancelButton"
                  >
                    {t('Cancel')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    theme={ThemeButtonEnum.OUTLINE}
                    onClick={onSave}
                    data-testid="EditableProfileCardHeader.SaveButton"
                  >
                    {t('Save')}
                  </ButtonDeprecated>
                </HStack>
              )}
            </div>
          )}
        </HStack>
      }
    />
  );
};

export default memo(EditableProfileCardHeader);
