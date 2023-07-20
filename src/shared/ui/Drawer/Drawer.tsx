import { useTheme } from 'app/providers/ThemeProvider';
import { FC, ReactNode } from 'react';
import { TMods, classNames } from 'shared/lib/classNames';
import { useModal } from 'shared/lib/hooks/useModal';
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
  const { handleClose, opened } = useModal({ isOpen, animationDelay: 500, onClose });

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
