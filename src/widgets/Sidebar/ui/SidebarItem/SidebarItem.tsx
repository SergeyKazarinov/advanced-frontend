import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { ISidebarItem } from 'widgets/Sidebar/model/types/sidebar';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@entities/User';
import { AppLink, AppLinkThemeEnum } from 'shared/ui/AppLink';
import s from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: ISidebarItem;
  collapsed: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({ item, collapsed }) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);
  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkThemeEnum.SECONDARY}
      to={item.path}
      className={classNames(s.item, { [s.collapsed]: collapsed }, [])}
    >
      <item.Icon className={s.icon} size={24} />
      <span className={s.link}>{t(item.text)}</span>
    </AppLink>
  );
};

export default memo(SidebarItem);
