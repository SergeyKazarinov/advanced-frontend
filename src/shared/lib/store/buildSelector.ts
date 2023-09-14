import { useSelector } from 'react-redux';

import { IStateSchema } from '@app/providers/StoreProvider';

type TSelector<T, Args extends any[]> = (state: IStateSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type TResult<T, Args extends any[]> = [Hook<T, Args>, TSelector<T, Args>];

export const buildSelector = <T, Args extends any[]>(selector: TSelector<T, Args>): TResult<T, Args> => {
  const useSelectorHook: Hook<T, Args> = (...args: Args) =>
    useSelector((state: IStateSchema) => selector(state, ...args));

  return [useSelectorHook, selector];
};
