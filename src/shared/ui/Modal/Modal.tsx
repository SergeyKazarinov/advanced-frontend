import React, {
  FC, ReactNode, MouseEvent, useEffect, useCallback, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import s from './Modal.module.scss';
import Portal from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = ({
  className, children, isOpen, onClose,
}) => {
  const { theme } = useTheme();

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
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

  const mods: Record<string, boolean> = {
    [s.opened]: isOpen,
  };

  const modalPortal = document.getElementById('modal') ?? document.body;

  return (
    <Portal element={modalPortal}>
      <div className={(classNames('app', {}, [theme]))}>
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
      </div>
    </Portal>
  );
};

export default Modal;
