import { FC } from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import s from './Navbar.module.scss';
import AppLink, { AppLinkThemeEnum } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;

}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return ( 
    <div className={classNames(s.navbar, {}, [])}>
      <div className={s.links}>
      <AppLink theme={AppLinkThemeEnum.PRIMARY} to={'/'} className={s.mainLink}>Главная</AppLink>
      <AppLink theme={AppLinkThemeEnum.SECONDARY} to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  );
}

export default Navbar;