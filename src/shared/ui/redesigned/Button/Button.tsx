import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import { TMods } from '@shared/lib/classNames';

import { classNames } from '../../../lib/classNames/classNames';

import s from './Button.module.scss';

export type TButtonVariant = 'clear' | 'outline' | 'filled';

export type TSizeButtonVariant = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: TButtonVariant;
  square?: boolean;
  size?: TSizeButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  addonRight?: ReactNode;
  addonLeft?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = 'outline',
  square,
  size = 'm',
  disabled,
  fullWidth,
  addonLeft,
  addonRight,
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
      <div className={s.addonLeft}>{addonLeft}</div>
      {children}
      <div className={s.addonRight}>{addonRight}</div>
    </button>
  );
};

export default memo(Button);
