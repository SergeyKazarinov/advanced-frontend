import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { AppRouteByPathPattern, AppRoutesEnum } from '@shared/const/router';

export const useRouterChange = () => {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<AppRoutesEnum>(AppRoutesEnum.MAIN);

  useEffect(() => {
    Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  return appRoute;
};
