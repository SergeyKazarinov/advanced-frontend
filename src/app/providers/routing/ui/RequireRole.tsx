import { FC, ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserRoles, UserRoleEnum } from '@entities/User';
import { getRouteForbidden } from '@shared/const/router';

interface RequireRoleProps {
  children: ReactNode;
  roles?: UserRoleEnum[];
}

const RequireRole: FC<RequireRoleProps> = ({ children, roles }) => {
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequireRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((item) => {
      const hasRole = userRoles?.includes(item);
      return hasRole;
    });
  }, [userRoles, roles]);

  return !hasRequireRoles ? (
    <Navigate to={getRouteForbidden()} state={{ state: location }} replace />
  ) : (
    children
  );
};

export default RequireRole;
