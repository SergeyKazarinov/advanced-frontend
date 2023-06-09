import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkThemeEnum } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;

}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.navbar, {}, [className])}>

      <div className={s.links}>
        <AppLink theme={AppLinkThemeEnum.PRIMARY} to="/" className={s.mainLink}>{t('Main')}</AppLink>
        <AppLink theme={AppLinkThemeEnum.SECONDARY} to="/about">{t('About')}</AppLink>
      </div>
    </div>
  );
};

export default Navbar;
