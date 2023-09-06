import { FC, memo, Suspense } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Loader } from '@shared/ui/deprecated/Loader';
import { Modal } from '@shared/ui/deprecated/Modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <div>
    <Modal isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  </div>
);

export default memo(LoginModal);
