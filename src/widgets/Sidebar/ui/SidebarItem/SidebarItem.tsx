import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkThemeEnum } from 'shared/ui/AppLink/AppLink';
import { ISidebarItem } from 'widgets/Sidebar/model/items';
import s from './SidebarItem.module.scss';

interface SidebarItemProps {
  item?: ISidebarItem;
  collapsed: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({ item, collapsed }) => {
  const { t } = useTranslation();
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
