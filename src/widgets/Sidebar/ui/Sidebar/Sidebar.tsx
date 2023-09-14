import { FC, memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { ToggleFeatures } from '@shared/lib/features';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import SidebarItem from '../SidebarItem/SidebarItem';

import DeprecatedSidebar from './DeprecatedSidebar/DeprecatedSidebar';
import RedesignedSidebar from './RedesignedSidebar/RedesignedSidebar';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = useCallback(() => {
    setCollapsed((state) => !state);
  }, []);

  const sidebarList = useMemo(
    () => sidebarItemsList.map((item) => <SidebarItem key={item.path} item={item} collapsed={collapsed} />),
    [collapsed, sidebarItemsList],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <RedesignedSidebar sidebarList={sidebarList} collapsed={collapsed} className={className} onToggle={onToggle} />
      }
      off={
        <DeprecatedSidebar sidebarList={sidebarList} collapsed={collapsed} className={className} onToggle={onToggle} />
      }
    />
  );
};

export default memo(Sidebar);
