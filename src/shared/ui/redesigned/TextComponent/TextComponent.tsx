import { FC, memo } from 'react';
import { classNames } from '@shared/lib/classNames';

import s from './TextComponent.module.scss';

export type TTextVariant = 'primary' | 'accent' | 'error';

export type TTextAlignVariant = 'right' | 'center' | 'left';

export type TTextSize = 'size_s' | 'size_m' | 'size_l' | 'size_xl';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TTextVariant;
  align?: TTextAlignVariant;
  size?: TTextSize;

  'data-testid'?: string;
}

type THeaderTag = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToHeaderTag: Record<TTextSize, THeaderTag> = {
  size_s: 'h4',
  size_m: 'h3',
  size_l: 'h2',
  size_xl: 'h1',
};

const TextComponent: FC<TextProps> = ({
  className,
  title,
  text,
  variant = 'primary',
  align = 'left',
  size = 'size_m',
  'data-testid': dataTestId = 'Text',
}) => {
  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames(s.textComponent, {}, [className, s[variant], s[align], s[size]])}>
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

export default memo(TextComponent);
