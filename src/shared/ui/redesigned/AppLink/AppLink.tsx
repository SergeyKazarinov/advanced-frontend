import { FC, memo } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@shared/lib/classNames';

import s from './AppLink.module.scss';

export type TAppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: TAppLinkVariant;
  activeClassName?: string;
}

const AppLink: FC<AppLinkProps> = ({
  variant = 'primary',
  className,
  children,
  to,
  activeClassName = '',
  ...otherProps
}) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames('', { [activeClassName]: isActive }, [className, s[variant]])}
    {...otherProps}
  >
    {children}
  </NavLink>
);

export default memo(AppLink);
