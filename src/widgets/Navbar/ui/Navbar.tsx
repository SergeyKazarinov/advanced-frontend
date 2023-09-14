import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@entities/User';
import { LoginModal } from '@features/AuthByUsername';
import { AvatarDropdown } from '@features/avatarDropdown';
import { NotificationButton } from '@features/notificationButton';
import { getRouteArticleCreate } from '@shared/const/router';
import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures, toggleFeatures } from '@shared/lib/features';
import { AppLink, AppLinkThemeEnum } from '@shared/ui/deprecated/AppLink';
import { Button as ButtonDeprecated, ThemeButtonEnum } from '@shared/ui/deprecated/Button';
import { TextComponent as TextComponentDeprecated, TextThemeEnum } from '@shared/ui/deprecated/TextComponent';
import { Button } from '@shared/ui/redesigned/Button';
import { HStack } from '@shared/ui/redesigned/Stack';

import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('main');
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const navbarClass = toggleFeatures({ name: 'isAppRedesigned', on: () => s.navbarRedesigned, off: () => s.navbar });

  if (userAuthData) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <header className={classNames(navbarClass, {}, [className])}>
            <HStack gap="16" className={s.actions}>
              <NotificationButton />
              <AvatarDropdown className={s.avatar} />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(navbarClass, {}, [className])}>
            <TextComponentDeprecated theme={TextThemeEnum.INVERTED} className={s.appName} title={t('Frontend')} />
            <AppLink theme={AppLinkThemeEnum.SECONDARY} to={getRouteArticleCreate()} className={s.createArticle}>
              {t('Create article')}
            </AppLink>
            <HStack gap="16" className={s.actions}>
              <NotificationButton />
              <AvatarDropdown className={s.avatar} />
            </HStack>
          </header>
        }
      />
    );
  }

  return (
    <header className={classNames(navbarClass, {}, [className])}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Button className={s.links} variant="clear" onClick={onOpenModal}>
            {t('Sign In')}
          </Button>
        }
        off={
          <ButtonDeprecated theme={ThemeButtonEnum.BACKGROUND} className={s.links} onClick={onOpenModal}>
            {t('Sign In')}
          </ButtonDeprecated>
        }
      />

      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
};

export default memo(Navbar);
