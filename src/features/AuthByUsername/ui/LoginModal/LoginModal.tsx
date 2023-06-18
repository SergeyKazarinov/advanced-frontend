import { FC } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './LoginModal.module.scss';
import LoginFrom from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <div>
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(s.LoginModal, {}, [className])}
      lazy
    >
      <LoginFrom />
    </Modal>
  </div>
);

export default LoginModal;
