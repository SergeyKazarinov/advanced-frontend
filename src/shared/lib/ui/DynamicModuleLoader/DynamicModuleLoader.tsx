import { IReduxStoreWithManager, TStateSchemaKey } from '@app/providers/StoreProvider';
import {
  FC, ReactNode, useEffect,
} from 'react';
import { useDispatch, useStore } from 'react-redux';
import { TReducerList } from './DynamicModuleLoader.types';

interface DynamicModuleLoaderProps {
  children: ReactNode;
  reducers: TReducerList;
  removeAfterUnmount?: boolean;
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children, reducers, removeAfterUnmount = true,
}) => {
  const store = useStore() as IReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted: boolean | undefined = mountedReducers[name as TStateSchemaKey];
      if (!mounted) {
        store.reducerManager?.add(name as TStateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager?.remove(name as TStateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);
  return (
    // eslint-disable-next-line
    <>
      {children}
    </>
  );
};

export default DynamicModuleLoader;
