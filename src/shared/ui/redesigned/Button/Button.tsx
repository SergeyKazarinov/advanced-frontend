import { ButtonHTMLAttributes, FC, memo } from 'react';
import { TMods } from '@shared/lib/classNames';

import { classNames } from '../../../lib/classNames/classNames';

import s from './Button.module.scss';

export type TButtonVariant = 'clear' | 'outline';

export type TSizeButtonVariant = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: TButtonVariant;
  square?: boolean;
  size?: TSizeButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = 'outline',
  square,
  size = 'm',
  disabled,
  fullWidth,
  ...otherProps
}) => {
  const mods: TMods = {
    [s.square]: square,
    [s.disabled]: disabled,
    [s.fullWidth]: fullWidth,
  };

  return (
    <button
      type="button"
      className={classNames(s.button, mods, [className, s[variant], s[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default memo(Button);
