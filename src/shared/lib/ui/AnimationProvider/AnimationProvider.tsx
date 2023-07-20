import {
  ReactNode, createContext, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

type TSpring = typeof import('@react-spring/web');
type TGesture = typeof import('@use-gesture/react');

interface IAnimationContext {
  Gesture?: TGesture;
  Spring?: TSpring;
  isLoaded?: boolean;
}

const AnimationContext = createContext<IAnimationContext>({});

const getAsyncAnimationModules = () => Promise.all([
  import('@react-spring/web'),
  import('@use-gesture/react'),
]);

export const useAnimationLibs = () => useContext(AnimationContext) as Required<IAnimationContext>;

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const SpringRef = useRef<TSpring>();
  const GestureRef = useRef<TGesture>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(() => ({
    Gesture: GestureRef.current,
    Spring: SpringRef.current,
    isLoaded,
  }), [isLoaded]);

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
