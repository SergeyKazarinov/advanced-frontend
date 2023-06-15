import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButtonEnum } from 'shared/ui/Button/Button';
import { t } from 'i18next';
import Modal from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((state) => !state);
  }, []);

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Button
        theme={ThemeButtonEnum.BACKGROUND}
        className={s.links}
        onClick={onToggleModal}
      >
        {t('Sign In')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>{t('About')}</Modal>
    </div>
  );
};

export default Navbar;
