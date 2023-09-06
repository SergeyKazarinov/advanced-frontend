import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@entities/User';
import { getRouteAdmin, getRouteProfile } from '@shared/const/router';
import { classNames } from '@shared/lib/classNames';
import { Avatar } from '@shared/ui/deprecated/Avatar';
import { Dropdown } from '@shared/ui/deprecated/Popups';
import { t } from 'i18next';

interface AvatarDropdownProps {
  className?: string;
}

const AvatarDropdown: FC<AvatarDropdownProps> = ({ className }) => {
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

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction="bottomLeft"
      trigger={<Avatar size={30} src={userAuthData.avatar} />}
      items={[
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
          content: t('Logout'),
          onClick: onLogout,
        },
      ]}
    />
  );
};

export default memo(AvatarDropdown);
