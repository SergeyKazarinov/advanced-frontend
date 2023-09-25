import { forwardRef, ReactNode, useEffect, useRef, useState } from 'react';

interface ChildrenProps {
  inView: boolean;
}
interface InViewAnimateProps {
  className?: string;
  children: ({ inView }: ChildrenProps) => ReactNode;
}

const InViewAnimate = forwardRef<HTMLElement, InViewAnimateProps>(({ className, children }, ref) => {
  const [inView, setInView] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);

  const triggerRef = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      if (!inView) {
        setInView(entry.isIntersecting);
      }
    });

    if (triggerRef.current) {
      observer.current.observe(triggerRef.current);
    }

    return () => {
      if (observer.current && triggerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.current.unobserve(triggerRef.current);
      }
    };
  }, [triggerRef, observer, inView]);

  return (
    <div ref={triggerRef} className={className}>
      {children({ inView })}
    </div>
  );
});

export default InViewAnimate;
