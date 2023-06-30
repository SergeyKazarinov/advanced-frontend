import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import {
  FC, memo, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { Button, ThemeButtonEnum, SizeButtonEnum } from 'shared/ui/Button';
import SidebarItem from '../SidebarItem/SidebarItem';
import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((state) => !state);
  };

  const sidebarList = useMemo(() => (
    SidebarItemsList.map((item) => (
      <SidebarItem
        key={item.path}
        item={item}
        collapsed={collapsed}
      />
    ))
  ), [collapsed]);

  return (
    <div
      data-testid="sidebar"
      className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [className])}
    >
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

      <div className={s.items}>
        {sidebarList}
      </div>

      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} short={collapsed} />
      </div>
    </div>
  );
};

export default memo(Sidebar);
