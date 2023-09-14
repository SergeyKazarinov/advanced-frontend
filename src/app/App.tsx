import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserIsLoadPage, initAuthData } from '@entities/User';
import { MainLayout } from '@shared/layouts/MainLayout';
import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useTheme } from '@shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@widgets/Navbar';
import { PageLoader } from '@widgets/PageLoader';
import { Sidebar } from '@widgets/Sidebar';

import { AppRouter } from './providers/routing';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const isLoadPage = useSelector(getUserIsLoadPage);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!isLoadPage) {
    return <PageLoader />;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div id="app" className={classNames('app_redesigned', {}, [theme])}>
          <Suspense fallback="loading">
            <MainLayout content={<AppRouter />} header={<Navbar />} sidebar={<Sidebar />} />
          </Suspense>
        </div>
      }
      off={
        <div id="app" className={classNames('app', {}, [theme])}>
          <Suspense fallback="loading">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
    />
  );
};

export default App;
