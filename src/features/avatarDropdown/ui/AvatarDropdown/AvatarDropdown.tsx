import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@entities/User';
import { t } from 'i18next';
import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from '@shared/config/routeConfig';
import { classNames } from '@shared/lib/classNames';
import { Avatar } from '@shared/ui/Avatar';
import { Dropdown } from '@shared/ui/Popups';

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
        ...(isAdminPanelAvailable ? [{
          content: t('Admin panel'),
          href: RoutePath.admin_panel,
        }] : []),
        {
          content: t('User profile'),
          href: RoutePath.profile + userAuthData.id,
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
