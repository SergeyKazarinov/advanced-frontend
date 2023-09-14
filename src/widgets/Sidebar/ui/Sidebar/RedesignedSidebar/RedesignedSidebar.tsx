import { FC, memo, ReactNode } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { LangSwitcher } from '@features/LangSwitcher';
import { ThemeSwitcher } from '@features/ThemeSwitcher';
import { classNames } from '@shared/lib/classNames';
import { AppLogo } from '@shared/ui/redesigned/AppLogo';
import { VStack } from '@shared/ui/redesigned/Stack';

import s from './RedesignedSidebar.module.scss';

interface RedesignedSidebarProps {
  className?: string;
  collapsed: boolean;
  sidebarList: ReactNode[];
  onToggle: () => void;
}

const RedesignedSidebar: FC<RedesignedSidebarProps> = ({ collapsed, sidebarList, className, onToggle }) => (
  <aside data-testid="sidebar" className={classNames(s.redesignedSidebar, { [s.collapsed]: collapsed }, [className])}>
    <AppLogo className={s.appLogo} size={collapsed ? 30 : 50} />
    <VStack role="navigation" className={s.items}>
      {sidebarList}
    </VStack>
    <IoIosArrowBack onClick={onToggle} data-testid="sidebar-toggle" className={s.collapseBtn} />
    <div className={s.switchers}>
      <ThemeSwitcher />
      <LangSwitcher short={collapsed} />
    </div>
  </aside>
);

export default memo(RedesignedSidebar);
