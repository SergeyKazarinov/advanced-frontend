import { useTheme } from 'app/providers/ThemeProvider';
import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { TMods, classNames } from 'shared/lib/classNames';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';
import s from './Drawer.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const Drawer: FC<ModalProps> = ({
  className, children, isOpen, onClose,
}) => {
  const { theme } = useTheme();
  const [opened, setOpened] = useState(false);

  const handleClose = useCallback(() => {
    if (onClose) {
      setOpened(false);
      setTimeout(() => {
        onClose();
      }, 500);
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setOpened(true);
      }, 0);
    }
  }, [isOpen]);

  const mods: TMods = {
    [s.opened]: opened,
  };

  const modalPortal = document.getElementById('modal') ?? document.body;

  return (
    <Portal element={modalPortal}>
      <div className={(classNames(s.drawer, mods, [className, theme]))}>
        <Overlay onClick={handleClose} />
        <div
          className={s.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Drawer;
