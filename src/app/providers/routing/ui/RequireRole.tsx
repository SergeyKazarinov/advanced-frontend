import { UserRoleEnum, getUserRoles } from '@entities/User';
import { FC, ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from '@shared/config/routeConfig';

interface RequireRoleProps {
  children: ReactNode;
  roles?: UserRoleEnum[];
}

const RequireRole: FC<RequireRoleProps> = ({ children, roles }) => {
  const location = useLocation();
  const useRoles = useSelector(getUserRoles);

  const hasRequireRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((item) => {
      const hasRole = useRoles?.includes(item);
      return hasRole;
    });
  }, [useRoles, roles]);

  return !hasRequireRoles ? <Navigate to={RoutePath.forbidden} state={{ state: location }} replace /> : children;
};

export default RequireRole;
