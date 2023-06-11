import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { useTranslation } from 'react-i18next';
import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((state) => !state);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [className])}
    >
      <button
        type="button"
        onClick={onToggle}
        data-testid="sidebar-toggle"
      >
        {t('button')}
      </button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  );
};

export default Sidebar;
