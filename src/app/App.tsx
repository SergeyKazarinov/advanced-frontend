import { getUserIsLoadPage, userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/routing';

const App = () => {
  const dispatch = useAppDispatch();
  const isLoadPage = useSelector(getUserIsLoadPage);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="loading">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {isLoadPage && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
