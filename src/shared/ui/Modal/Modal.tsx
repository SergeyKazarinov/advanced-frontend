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
import s from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const Modal: FC<ModalProps> = ({
  className, children, isOpen, onClose, lazy,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (onClose) {
      setOpened(false);
      setTimeout(() => {
        onClose();
      }, 500);
    }
  }, [onClose]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && onClose) {
      handleClose();
    }
  }, [onClose, handleClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);

      setTimeout(() => {
        setOpened(true);
      }, 0);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const mods: TMods = {
    [s.opened]: (opened && isOpen),
  };

  const modalPortal = document.getElementById('modal') ?? document.body;

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={modalPortal}>
      <div className={(classNames(s.modal, mods, [className, theme]))}>
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

export default Modal;
