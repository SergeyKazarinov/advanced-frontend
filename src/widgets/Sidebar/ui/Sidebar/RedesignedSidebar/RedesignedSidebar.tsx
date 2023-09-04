import { FC, memo, ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import { AppLogo } from '@shared/ui/AppLogo';

import s from './RedesignedSidebar.module.scss';

interface RedesignedSidebarProps {
  className?: string;
  collapsed: boolean;
  sidebarList: ReactNode[];
  onToggle: () => void;
}

const RedesignedSidebar: FC<RedesignedSidebarProps> = ({ collapsed, sidebarList, className, onToggle }) => (
  <aside data-testid="sidebar" className={classNames(s.redesignedSidebar, { [s.collapsed]: collapsed }, [className])}>
    <AppLogo className={s.appLogo} />
  </aside>
);

export default memo(RedesignedSidebar);
