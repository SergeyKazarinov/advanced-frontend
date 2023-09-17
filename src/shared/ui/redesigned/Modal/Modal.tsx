import { FC, ReactNode } from 'react';

import { classNames, TMods } from '@shared/lib/classNames';
import { toggleFeatures } from '@shared/lib/features';
import { useModal } from '@shared/lib/hooks/useModal';
import { useTheme } from '@shared/lib/hooks/useTheme/useTheme';

import { Overlay } from '../../redesigned/Overlay';
import { Portal } from '../../redesigned/Portal';

import s from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose, lazy }) => {
  const { theme } = useTheme();
  const { handleClose, isMounted, opened } = useModal({
    isOpen,
    animationDelay: 500,
    onClose,
  });

  const mods: TMods = {
    [s.opened]: opened,
  };

  const modalPortal = document.getElementById('app') ?? document.body;

  if (lazy && !isMounted) {
    return null;
  }

  const designClass = toggleFeatures({ name: 'isAppRedesigned', on: () => s.modalNew, off: () => s.modalOld });

  return (
    <Portal element={modalPortal}>
      <div className={classNames(s.modal, mods, [className, theme, designClass])}>
        <Overlay onClick={handleClose} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
};

export default Modal;
