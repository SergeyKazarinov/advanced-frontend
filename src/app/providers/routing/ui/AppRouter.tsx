import { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter: FC = () => {
  const routes = Object
    .values(routeConfig)
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

export default AppRouter;
