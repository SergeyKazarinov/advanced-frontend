import { getUserAuthData, userActions } from '@entities/User';
import { LoginModal } from 'features/AuthByUsername';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButtonEnum } from 'shared/ui/Button';
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
        <Button
          theme={ThemeButtonEnum.BACKGROUND}
          className={s.links}
          onClick={onLogout}
        >
          {t('Logout')}
        </Button>
      </header>
    );
  }
  return (
    <header className={classNames(s.navbar, {}, [className])}>
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
