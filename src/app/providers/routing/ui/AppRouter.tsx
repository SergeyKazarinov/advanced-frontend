import {
  FC, Suspense, memo,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from '@shared/config/routeConfig';
import { PageLoader } from '@widgets/PageLoader';
import RequireAuth from './RequireAuth';
import RequireRole from './RequireRole';

const AppRouter: FC = () => {
  const renderWithWrapper = (route: AppRoutesProps) => {
    const { element } = route;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly
          ? (
            <RequireAuth>
              <RequireRole roles={route.roles}>
                {element}
              </RequireRole>
            </RequireAuth>
          )
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
