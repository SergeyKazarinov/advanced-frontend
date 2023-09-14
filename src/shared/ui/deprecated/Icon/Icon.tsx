import React, { memo } from 'react';

import { classNames } from '@shared/lib/classNames/classNames';

import s from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export const Icon = memo(({ className, Svg, inverted, ...otherProps }: IconProps) => (
  // eslint-disable-next-line
  <Svg className={classNames(inverted ? s.inverted : s.Icon, {}, [className])} {...otherProps} />
));
