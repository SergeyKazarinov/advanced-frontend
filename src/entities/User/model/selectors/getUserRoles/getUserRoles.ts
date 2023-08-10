import { IStateSchema } from '@app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

import { UserRoleEnum } from '../../consts/consts';

export const getUserRoles = (state: IStateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRoleEnum.ADMIN)),
);
export const isUserManager = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRoleEnum.MANAGER)),
);
