import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ThemeButtonEnum {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeButtonEnum;
}

const Button: FC<ButtonProps> = ({
  className, children, theme, ...otherProps
}) => (
  <button type="button" className={classNames(s.button, {}, [className, s[theme]])} {...otherProps}>
    {children}
  </button>
);

export default Button;
