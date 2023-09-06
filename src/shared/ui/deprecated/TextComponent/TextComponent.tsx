import { FC, memo } from 'react';
import { classNames } from '@shared/lib/classNames';

import s from './TextComponent.module.scss';

export enum TextThemeEnum {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlignEnum {
  RIGHT = 'right',
  CENTER = 'center',
  LEFT = 'left',
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

  'data-testid'?: string;
}

type THeaderTag = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToHeaderTag: Record<TextSizeEnum, THeaderTag> = {
  [TextSizeEnum.S]: 'h4',
  [TextSizeEnum.M]: 'h3',
  [TextSizeEnum.L]: 'h2',
  [TextSizeEnum.XL]: 'h1',
};

const TextComponent: FC<TextProps> = ({
  className,
  title,
  text,
  theme = TextThemeEnum.PRIMARY,
  align = TextAlignEnum.LEFT,
  size = TextSizeEnum.M,
  'data-testid': dataTestId = 'Text',
}) => {
  const HeaderTag = mapSizeToHeaderTag[size];
  return (
    <div className={classNames(s.textComponent, {}, [className, s[theme], s[align], s[size]])}>
      {title && (
        <HeaderTag className={s.title} data-testid={`${dataTestId}.Header`}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={s.text} data-testid={`${dataTestId}.Paragraph`}>
          {text}
        </p>
      )}
    </div>
  );
};

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export default memo(TextComponent);
