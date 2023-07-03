import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import s from './TextComponent.module.scss';

export enum TextThemeEnum {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlignEnum {
  RIGHT = 'right',
  CENTER = 'center',
  LEFT = 'left'
}

export enum TextSizeEnum {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemeEnum;
  align?: TextAlignEnum;
  size?: TextSizeEnum;
}

const TextComponent: FC<TextProps> = ({
  className,
  title,
  text,
  theme = TextThemeEnum.PRIMARY,
  align = TextAlignEnum.LEFT,
  size = TextSizeEnum.M,
}) => (
  <div className={(classNames(s.textComponent, {}, [className, s[theme], s[align], s[size]]))}>
    {title && <p className={s.title}>{title}</p>}
    {text && <p className={s.text}>{text}</p>}
  </div>
);

export default memo(TextComponent);
