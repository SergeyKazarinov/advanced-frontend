import { ButtonHTMLAttributes, FC, memo } from 'react';

import { TMods } from '@shared/lib/classNames';

import { classNames } from '../../../lib/classNames/classNames';

import s from './Button.module.scss';

export enum ThemeButtonEnum {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
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
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ThemeButtonEnum.OUTLINE,
  square,
  size = SizeButtonEnum.M,
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
      className={classNames(s.button, mods, [className, s[theme], s[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export default memo(Button);
