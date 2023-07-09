import { getUserAuthData } from '@entities/User';
import {
  FC, Suspense, memo,
} from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import RequireAuth from './RequireAuth';

const AppRouter: FC = () => {
  const isAuth = useSelector(getUserAuthData);

  const renderWithWrapper = (route: AppRoutesProps) => {
    const { element } = route;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly
          ? <RequireAuth isAuth={isAuth}>{element}</RequireAuth>
          : element}
      />
    );
  };
  const routesAuth = Object.values(routeConfig);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routesAuth.map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
