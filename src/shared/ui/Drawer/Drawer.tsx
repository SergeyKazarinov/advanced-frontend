import { useTheme } from '@app/providers/ThemeProvider';
import {
  FC, ReactNode, memo, useCallback, useEffect,
} from 'react';
import { TMods, classNames } from '@shared/lib/classNames';
import { useModal } from '@shared/lib/hooks/useModal';
import { AnimationProvider, useAnimationLibs } from '@shared/lib/ui/AnimationProvider';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';
import s from './Drawer.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const height = window.innerHeight - 100;

const DrawerContent: FC<ModalProps> = ({
  className, children, isOpen, onClose,
}) => {
  const { Gesture, Spring } = useAnimationLibs();
  const { theme } = useTheme();
  const { handleClose, opened } = useModal({ isOpen, animationDelay: 500, onClose });
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: handleClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel, canceled,
    }) => {
      if (oy < -70) cancel();

      if (last) {
        if (oy > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close(vy);
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: oy, immediate: true });
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    },
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  const mods: TMods = {
    [s.opened]: opened,
  };

  const modalPortal = document.getElementById('modal') ?? document.body;

  if (!isOpen) {
    return null;
  }

  return (
    <Portal element={modalPortal}>
      <div className={(classNames(s.drawer, mods, [className, theme]))}>
        <Overlay onClick={close} />
        <Spring.a.div
          className={s.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
};

const DrawerLazy: FC<ModalProps> = memo((props) => {
  const { isLoaded } = useAnimationLibs();
  if (!isLoaded) {
    return null;
  }
  // eslint-disable-next-line
  return <DrawerContent {...props} />;
});

const Drawer: FC<ModalProps> = (props) => (
  <AnimationProvider>
    {/* eslint-disable-next-line */}
    <DrawerLazy {...props} />
  </AnimationProvider>
);

export default Drawer;
