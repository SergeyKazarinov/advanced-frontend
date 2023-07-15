import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import {
  FC, memo, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButtonEnum, SizeButtonEnum } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import SidebarItem from '../SidebarItem/SidebarItem';
import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((state) => !state);
  };

  const sidebarList = useMemo(() => (
    sidebarItemsList.map((item) => (
      <SidebarItem
        key={item.path}
        item={item}
        collapsed={collapsed}
      />
    ))
  ), [collapsed, sidebarItemsList]);

  return (
    <aside
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

      <VStack role="navigation" className={s.items}>
        {sidebarList}
      </VStack>

      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} short={collapsed} />
      </div>
    </aside>
  );
};

export default memo(Sidebar);
