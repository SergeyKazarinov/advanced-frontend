import { IStateSchema } from '@app/providers/StoreProvider';
import { getScrollSaveByPath, scrollSaveActions } from '@features/ScrollSave';
import {
  FC, MutableRefObject, ReactNode, UIEvent, memo, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from '@shared/lib/classNames';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from '@shared/lib/hooks/useInfititeScroll';
import { useInitialEffect } from '@shared/lib/hooks/useInitialEffect';
import { useThrottle } from '@shared/lib/hooks/useThrottle/useThrottle';
import { ITestProps } from '@shared/types';
import s from './Page.module.scss';

interface PageProps extends ITestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

const Page: FC<PageProps> = ({
  className, children, onScrollEnd, ...props
}) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: IStateSchema) => getScrollSaveByPath(state, pathname));

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname,
    }));
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={classNames(s.page, {}, [className])}
      onScroll={handleScroll}
      id={PAGE_ID}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      {onScrollEnd && <div className={s.trigger} ref={triggerRef} />}
    </main>
  );
};

export default memo(Page);
