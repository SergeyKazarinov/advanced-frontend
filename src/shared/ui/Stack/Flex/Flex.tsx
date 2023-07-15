import { FC, ReactNode, memo } from 'react';
import { TMods, classNames } from 'shared/lib/classNames';
import s from './Flex.module.scss';

export type TFlexJustify = 'start' | 'center' | 'end' | 'between';
export type TFlexAlign = 'start' | 'center' | 'end';
export type TFlexDirection = 'row' | 'column';
export type TFlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<TFlexJustify, string> = {
  start: s.justifyStart,
  center: s.justifyCenter,
  end: s.justifyEnd,
  between: s.justifyBetween,
};
const alignClasses: Record<TFlexAlign, string> = {
  start: s.alignStart,
  center: s.alignCenter,
  end: s.alignEnd,
};

const directionClasses: Record<TFlexDirection, string> = {
  row: s.directionRow,
  column: s.directionColumn,
};

const gapClasses: Record<TFlexGap, string> = {
  4: s.gap4,
  8: s.gap8,
  16: s.gap16,
  32: s.gap32,

};

export interface FlexProps {
  className?: string;
  children: ReactNode;
  justify?: TFlexJustify;
  align?: TFlexAlign;
  direction?: TFlexDirection;
  gap?: TFlexGap;
  max?: boolean
}

const Flex: FC<FlexProps> = ({
  className,
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap = '8',
  max,
}) => {
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gapClasses[gap],
  ];

  const mods: TMods = {
    [s.max]: max,
  };
  return (
    <div className={classNames(s.flex, mods, classes)}>
      {children}
    </div>
  );
};

export default memo(Flex);