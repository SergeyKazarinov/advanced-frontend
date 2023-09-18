import { FC, memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps } from '@shared/types';

import { routeConfig } from '../config/routeConfig';

import RequireAuth from './RequireAuth';
import RequireRole from './RequireRole';

const AppRouter: FC = () => {
  const renderWithWrapper = (route: AppRoutesProps) => {
    const { element } = route;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth>
              <RequireRole roles={route.roles}>{element}</RequireRole>
            </RequireAuth>
          ) : (
            element
          )
        }
      />
    );
  };
  const routesAuth = Object.values(routeConfig);

  return (
    <Suspense>
      <Routes>{routesAuth.map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
