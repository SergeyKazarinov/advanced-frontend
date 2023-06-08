import { FC, useState } from "react";
import s from './Sidebar.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "features/ThemeSwitcher";

interface SidebarProps {
  className?: string; 
}

const Sidebar: FC<SidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(state => !state)
  }

  return ( 
    <div className={classNames(s.sidebar, {[s.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>asdf</button>
      <div className={s.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Sidebar;