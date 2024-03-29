import { FC, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '@shared/lib/classNames';

import s from './AppLink.module.scss';

export enum AppLinkThemeEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkThemeEnum;
}

const AppLink: FC<AppLinkProps> = ({ theme = AppLinkThemeEnum.PRIMARY, className, children, to, ...otherProps }) => (
  <Link to={to} className={classNames(s.appLink, {}, [className, s[theme]])} {...otherProps}>
    {children}
  </Link>
);

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export default memo(AppLink);
