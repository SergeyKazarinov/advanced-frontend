import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { useTranslation } from 'react-i18next';
import Button, { SizeButtonEnum, ThemeButtonEnum } from 'shared/ui/Button/Button';
import AppLink, { AppLinkThemeEnum } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AiFillHome } from 'react-icons/ai';
import { BsCardList } from 'react-icons/bs';
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
        <AppLink
          theme={AppLinkThemeEnum.SECONDARY}
          to={RoutePath.main}
          className={s.item}
        >
          <AiFillHome className={s.icon} size={24} />
          <span className={s.link}>{t('Main')}</span>
        </AppLink>

        <AppLink
          theme={AppLinkThemeEnum.SECONDARY}
          to={RoutePath.about}
          className={s.item}
        >
          <BsCardList className={s.icon} size={24} />
          <span className={s.link}>{t('About')}</span>
        </AppLink>
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} short={collapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
