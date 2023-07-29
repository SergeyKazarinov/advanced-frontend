import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { RxAvatar } from 'react-icons/rx';
import s from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

const Avatar: FC<AvatarProps> = ({
  className, src, size, alt,
}) => {
  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = <RxAvatar />;

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

export default Avatar;
