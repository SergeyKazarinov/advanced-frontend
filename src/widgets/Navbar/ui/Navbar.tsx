import { getUserAuthData, userActions } from '@entities/User';
import { LoginModal } from 'features/AuthByUsername';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButtonEnum } from 'shared/ui/Button';
import { TextComponent, TextThemeEnum } from 'shared/ui/TextComponent';
import { AppLink, AppLinkThemeEnum } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown';
import { Avatar } from 'shared/ui/Avatar';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = () => {
    dispatch(userActions.logout());
  };

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
