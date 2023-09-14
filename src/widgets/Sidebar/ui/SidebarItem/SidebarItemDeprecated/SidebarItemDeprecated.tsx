import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@shared/lib/classNames';
import { AppLink, AppLinkThemeEnum } from '@shared/ui/deprecated/AppLink';

import { ISidebarItem } from '../../../model/types/sidebar';

import s from './SidebarItemDeprecated.module.scss';

interface SidebarItemDeprecatedProps {
  item: ISidebarItem;
  collapsed: boolean;
}

const SidebarItemDeprecated: FC<SidebarItemDeprecatedProps> = ({ item, collapsed }) => {
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

export default memo(SidebarItemDeprecated);
