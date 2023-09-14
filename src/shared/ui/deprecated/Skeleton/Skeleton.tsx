import { CSSProperties, FC, memo } from 'react';

import { classNames } from '@shared/lib/classNames';

import s from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

const Skeleton: FC<SkeletonProps> = ({ className, height, width, border }) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };
  return <div className={classNames(s.skeleton, {}, [className])} style={styles} />;
};

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export default memo(Skeleton);
