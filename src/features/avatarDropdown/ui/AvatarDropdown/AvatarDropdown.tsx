import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@entities/User';
import { getRouteAdmin, getRouteProfile, getRouteSettings } from '@shared/const/router';
import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { Avatar as AvatarDeprecated } from '@shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@shared/ui/deprecated/Popups';
import { Avatar } from '@shared/ui/redesigned/Avatar';
import { Dropdown } from '@shared/ui/redesigned/Popups';

interface AvatarDropdownProps {
  className?: string;
}

const AvatarDropdown: FC<AvatarDropdownProps> = ({ className }) => {
  const { t } = useTranslation('main');
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const userAuthData = useSelector(getUserAuthData);

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!userAuthData) {
    return null;
  }

  const items = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: t('Admin panel'),
            href: getRouteAdmin(),
          },
        ]
      : []),
    {
      content: t('User profile'),
      href: getRouteProfile(userAuthData.id),
    },
    {
      content: t('User Settings'),
      href: getRouteSettings(),
    },
    {
      content: t('Logout'),
      onClick: onLogout,
    },
  ];

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Dropdown
          className={classNames('', {}, [className])}
          direction="bottomLeft"
          trigger={<Avatar size={40} src={userAuthData.avatar} />}
          items={items}
        />
      }
      off={
        <DropdownDeprecated
          className={classNames('', {}, [className])}
          direction="bottomLeft"
          trigger={<AvatarDeprecated size={30} src={userAuthData.avatar} />}
          items={items}
        />
      }
    />
  );
};

export default memo(AvatarDropdown);
