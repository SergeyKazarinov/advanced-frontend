import { IUser } from '@entities/User';
import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig';

interface RequireAuthProps {
  children: ReactNode;
  isAuth: IUser | undefined
}

const RequireAuth: FC<RequireAuthProps> = ({ children, isAuth }) => {
  const location = useLocation();

  return !isAuth ? <Navigate to={RoutePath.main} state={{ state: location }} replace /> : children;
};

export default RequireAuth;
