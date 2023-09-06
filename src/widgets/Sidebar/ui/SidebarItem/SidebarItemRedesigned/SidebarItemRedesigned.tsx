import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@shared/lib/classNames';
import { AppLink } from '@shared/ui/redesigned/AppLink';

import { ISidebarItem } from '../../../model/types/sidebar';

import s from './SidebarItemRedesigned.module.scss';

interface SidebarItemRedesignedProps {
  item: ISidebarItem;
  collapsed: boolean;
}

const SidebarItemRedesigned: FC<SidebarItemRedesignedProps> = ({ item, collapsed }) => {
  const { t } = useTranslation();

  return (
    <AppLink to={item.path} className={classNames(s.item, { [s.collapsed]: collapsed }, [])} activeClassName={s.active}>
      <item.Icon className={s.icon} size={24} />
      <span className={s.link}>{t(item.text)}</span>
    </AppLink>
  );
};

export default memo(SidebarItemRedesigned);
