import { getUserAuthData } from '@entities/User';
import { RoutePath } from '@shared/const/router';
import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector(getUserAuthData);

  return !isAuth ? <Navigate to={RoutePath.main} state={{ state: location }} replace /> : children;
};

export default RequireAuth;
