import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Avatar.module.scss';

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

  return (
    <img
      src={src}
      style={styles}
      className={classNames(s.avatar, {}, [className])}
      alt={alt || 'avatar'}
    />
  );
};

export default Avatar;
