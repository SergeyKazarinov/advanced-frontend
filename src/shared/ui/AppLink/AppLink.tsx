import { FC } from "react";
import s from './AppLink.module.scss';
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";

export enum AppLinkThemeEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkThemeEnum;
}

const AppLink: FC<AppLinkProps> = ({ 
  theme  = AppLinkThemeEnum.PRIMARY,
  className,
  children,
  to,
  ...otherProps
}) => {
  return ( 
    <Link
      to={to}
      className={classNames(s.appLink, {}, [className, s[theme]])}
      {...otherProps}
      >
      {children}
    </Link>
  );
}

export default AppLink ;