import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@entities/User';
import { LoginModal } from 'features/AuthByUsername';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkThemeEnum } from 'shared/ui/AppLink';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ThemeButtonEnum } from 'shared/ui/Button';
import { Dropdown } from 'shared/ui/Dropdown';
import { TextComponent, TextThemeEnum } from 'shared/ui/TextComponent';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  const isAdminPanelAvailable = isAdmin || isManager;

  if (userAuthData) {
    return (
      <header className={classNames(s.navbar, {}, [className])}>
        <TextComponent
          theme={TextThemeEnum.INVERTED}
          className={s.appName}
          title={t('Frontend')}
        />
        <AppLink
          theme={AppLinkThemeEnum.SECONDARY}
          to={RoutePath.article_create}
          className={s.createArticle}
        >
          {t('Create article')}
        </AppLink>
        <Dropdown
          direction="bottomLeft"
          className={s.dropdown}
          trigger={<Avatar size={30} src={userAuthData.avatar} />}
          items={[
            ...(isAdminPanelAvailable ? [{
              content: t('Admin panel'),
              href: RoutePath.admin_panel,
            }] : []),
            {
              content: t('User profile'),
              href: RoutePath.profile + userAuthData.id,
            },
            {
              content: t('Logout'),
              onClick: onLogout,
            },
          ]}
        />
      </header>
    );
  }
  return (
    <header className={classNames(s.navbar, {}, [className])}>
      <TextComponent
        theme={TextThemeEnum.INVERTED}
        className={s.appName}
        title={t('Frontend')}
      />
      <Button
        theme={ThemeButtonEnum.BACKGROUND}
        className={s.links}
        onClick={onOpenModal}
      >
        {t('Sign In')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
};

export default memo(Navbar);
