import { CSSProperties, FC, memo, useMemo } from 'react';
import { RxAvatar } from 'react-icons/rx';

import { classNames } from '@shared/lib/classNames';

import { AppImage } from '../../redesigned/AppImage';
import { Skeleton } from '../../redesigned/Skeleton';

import s from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

const Avatar: FC<AvatarProps> = ({ className, src, size, alt }) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = <RxAvatar size={30} className={s.icon} />;

  return (
    <AppImage
      src={src}
      style={styles}
      className={classNames(s.avatar, {}, [className])}
      alt={alt || 'avatar'}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  );
};

export default memo(Avatar);
