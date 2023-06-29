import { getUserAuthData } from '@entities/User';
import {
  FC, Suspense, memo, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter: FC = () => {
  const isAuth = useSelector(getUserAuthData);

  const routesAuth = useMemo(() => Object.values(routeConfig).filter(
    (item) => (!(item.authOnly && !isAuth)),
  ), [isAuth]);
  const routes = routesAuth
    .map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={<div className="page-wrapper">{element}</div>}
      />
    ));

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
