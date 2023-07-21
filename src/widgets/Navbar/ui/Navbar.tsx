import { getUserAuthData } from '@entities/User';
import { LoginModal } from '@features/AuthByUsername';
import { AvatarDropdown } from '@features/avatarDropdown';
import { NotificationButton } from '@features/notificationButton';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from '@shared/config/routeConfig';
import { classNames } from '@shared/lib/classNames';
import { AppLink, AppLinkThemeEnum } from '@shared/ui/AppLink';
import { Button, ThemeButtonEnum } from '@shared/ui/Button';
import { HStack } from '@shared/ui/Stack';
import { TextComponent, TextThemeEnum } from '@shared/ui/TextComponent';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

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
        <HStack gap="16" className={s.actions}>
          <NotificationButton />
          <AvatarDropdown className={s.avatar} />
        </HStack>

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
