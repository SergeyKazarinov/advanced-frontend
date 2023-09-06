import React, { memo } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';

import s from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, Svg, ...otherProps }: IconProps) => (
  // eslint-disable-next-line
  <Svg className={classNames(s.Icon, {}, [className])} {...otherProps} />
));
