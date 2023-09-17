import { useCallback, useEffect, useState } from 'react';

interface IUseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}

export const useModal = ({ animationDelay, isOpen, onClose }: IUseModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
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
      }, animationDelay);
    }
  }, [onClose, animationDelay]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        handleClose();
      }
    },
    [onClose, handleClose],
  );

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

  return {
    isMounted,
    opened,
    handleClose,
  };
};
