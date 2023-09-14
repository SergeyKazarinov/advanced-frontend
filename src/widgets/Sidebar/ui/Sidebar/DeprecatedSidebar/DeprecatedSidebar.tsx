import { FC, memo, ReactNode } from 'react';

import { LangSwitcher } from '@features/LangSwitcher';
import { ThemeSwitcher } from '@features/ThemeSwitcher';
import { classNames } from '@shared/lib/classNames';
import { Button, SizeButtonEnum, ThemeButtonEnum } from '@shared/ui/deprecated/Button';
import { VStack } from '@shared/ui/redesigned/Stack';

import s from './DeprecatedSidebar.module.scss';

interface DeprecatedSidebarProps {
  className?: string;
  collapsed: boolean;
  sidebarList: ReactNode[];
  onToggle: () => void;
}

const DeprecatedSidebar: FC<DeprecatedSidebarProps> = ({ collapsed, sidebarList, className, onToggle }) => (
  <aside data-testid="sidebar" className={classNames(s.deprecatedSidebar, { [s.collapsed]: collapsed }, [className])}>
    <Button
      type="button"
      onClick={onToggle}
      data-testid="sidebar-toggle"
      className={s.collapseBtn}
      theme={ThemeButtonEnum.BACKGROUND_INVERTED}
      square
      size={SizeButtonEnum.L}
    >
      {collapsed ? '>' : '<'}
    </Button>

    <VStack role="navigation" className={s.items}>
      {sidebarList}
    </VStack>

    <div className={s.switchers}>
      <ThemeSwitcher />
      <LangSwitcher className={s.lang} short={collapsed} />
    </div>
  </aside>
);

export default memo(DeprecatedSidebar);
