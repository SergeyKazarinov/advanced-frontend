import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import s from './Button.module.scss';

export enum ThemeButtonEnum {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButtonEnum {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButtonEnum;
  square?: boolean;
  size?: SizeButtonEnum;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  className, children, theme, square, size = SizeButtonEnum.M, disabled, ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [s.square]: square,
    [s.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(s.button, mods, [className, s[theme], s[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
