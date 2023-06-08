import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

interface AppRouterProps {
  
}

const AppRouter: FC<AppRouterProps> = () => {
  const routes = Object
  .values(routeConfig)
  .map(({element, path}) => (
    <Route key={path} path={path} element={element} />
  ))


  return ( 
    <Suspense fallback={<div>Loading</div>}>
        <Routes>
          {routes}
        </Routes>
      </Suspense>
  );
}

export default AppRouter;