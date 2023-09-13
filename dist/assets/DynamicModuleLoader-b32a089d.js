import { i as importShared, b as useStore, c as useDispatch, j as jsxRuntimeExports } from './index-e8277ff6.js';

const {useEffect} = await importShared('react');
const DynamicModuleLoader = ({
  children,
  reducers,
  removeAfterUnmount = true
}) => {
  const store = useStore();
  const dispatch = useDispatch();
  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name];
      if (!mounted) {
        store.reducerManager?.add(name, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager?.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);
  return (
    // eslint-disable-next-line
    /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children })
  );
};

export { DynamicModuleLoader as D };
