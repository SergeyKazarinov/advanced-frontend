import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserIsLoadPage, userActions } from '@entities/User';
import { classNames } from '@shared/lib/classNames';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useTheme } from '@shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@widgets/Navbar';
import { Sidebar } from '@widgets/Sidebar';

import { AppRouter } from './providers/routing';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const isLoadPage = useSelector(getUserIsLoadPage);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  if (!isLoadPage) {
    return null;
  }

  return (
    isLoadPage && (
      <div className={classNames('app', {}, [theme])}>
        <Suspense fallback="loading">
          <Navbar />
          <div className="content-page">
            <Sidebar />
            <AppRouter />
          </div>
        </Suspense>
      </div>
    )
  );
};

export default App;
