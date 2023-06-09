import { FC, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

interface AppRouterProps {

}

const AppRouter: FC<AppRouterProps> = () => {
  const { t } = useTranslation();
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
    <Suspense fallback={<div>{t('Loading')}</div>}>
      <Routes>
        {routes}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
