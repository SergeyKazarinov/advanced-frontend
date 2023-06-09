import { getUserIsLoadPage, userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/routing';
import { useTheme } from './providers/ThemeProvider';

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
