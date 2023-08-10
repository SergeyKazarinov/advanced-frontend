import {
  FC,
  ImgHTMLAttributes,
  memo,
  ReactElement,
  useLayoutEffect,
  useState,
} from 'react';
import { classNames } from '@shared/lib/classNames';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

const AppImage: FC<AppImageProps> = ({
  className,
  src,
  alt = 'image',
  fallback,
  errorFallback,
  ...otherProps
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return (
    <img
      className={classNames('', {}, [className])}
      alt={alt}
      src={src}
      {...otherProps}
    />
  );
};

export default memo(AppImage);
