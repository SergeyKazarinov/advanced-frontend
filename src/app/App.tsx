import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppRouter } from './providers/routing';

const App = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="loading">
        <Navbar />
        <Modal isOpen={open} onClose={handleClose}>{t('About')}</Modal>
        <Button onClick={handleOpen}>{t('About')}</Button>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
