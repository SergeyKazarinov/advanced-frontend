import {
  FC, MutableRefObject, ReactNode, memo, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfititeScroll';
import s from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void
}

const Page: FC<PageProps> = ({ className, children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(s.page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};

export default memo(Page);
