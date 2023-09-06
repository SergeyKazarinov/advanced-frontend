import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@entities/User';
import { ToggleFeatures } from '@shared/lib/features';

import { ISidebarItem } from '../../model/types/sidebar';

import SidebarItemDeprecated from './SidebarItemDeprecated/SidebarItemDeprecated';
import SidebarItemRedesigned from './SidebarItemRedesigned/SidebarItemRedesigned';

interface SidebarItemProps {
  item: ISidebarItem;
  collapsed: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({ item, collapsed }) => {
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<SidebarItemRedesigned collapsed={collapsed} item={item} />}
      off={<SidebarItemDeprecated collapsed={collapsed} item={item} />}
    />
  );
};

export default memo(SidebarItem);
