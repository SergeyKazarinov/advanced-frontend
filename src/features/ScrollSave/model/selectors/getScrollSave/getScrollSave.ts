import { createSelector } from '@reduxjs/toolkit';
import { IStateSchema } from '@app/providers/StoreProvider';

export const getScrollSave = (state: IStateSchema) => state.scroll.scroll;

export const getScrollSaveByPath = createSelector(
  getScrollSave,
  (state: IStateSchema, pathName: string) => pathName,
  (scrollValue, pathName) => scrollValue[pathName] || 0,
);
