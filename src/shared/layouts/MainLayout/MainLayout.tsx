import { FC, memo, ReactElement } from 'react';
import { classNames } from '@shared/lib/classNames';

import s from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement;
  toolbar?: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({ className, header, content, sidebar, toolbar }) => (
  <div className={classNames(s.mainLayout, {}, [className])}>
    <div className={s.sidebar}>{sidebar}</div>
    <div className={s.content}>{content}</div>
    <div className={s.rightbar}>
      <div className={s.header}>{header}</div>
      <div className={s.toolbar}>{toolbar}</div>
    </div>
  </div>
);

export default memo(MainLayout);
