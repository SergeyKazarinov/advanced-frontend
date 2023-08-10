import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData } from '@entities/User';
import { getRouteMain } from '@shared/const/router';

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector(getUserAuthData);

  return !isAuth ? (
    <Navigate to={getRouteMain()} state={{ state: location }} replace />
  ) : (
    children
  );
};

export default RequireAuth;
