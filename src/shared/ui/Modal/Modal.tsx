import {
  FC,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { TMods, classNames } from 'shared/lib/classNames';
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

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && onClose) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const mods: TMods = {
    [s.opened]: isOpen,
  };

  const modalPortal = document.getElementById('modal') ?? document.body;

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={modalPortal}>
      <div className={(classNames(s.modal, mods, [className]))}>
        <div
          className={s.overlay}
          onClick={handleClose}
        >
          <div
            className={s.content}
            onClick={handleContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
