import { FC, memo, ReactElement } from 'react';

import { classNames } from '@shared/lib/classNames';

import s from './ResumeLayout.module.scss';

interface MainLayoutProps {
  className?: string;
  experience?: ReactElement;
  contacts?: ReactElement;
  skills?: ReactElement;
  education?: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({ className, experience, contacts, skills, education }) => (
  <div className={classNames(s.resumeLayout, {}, [className])}>
    <div className={s.contacts}>{contacts}</div>
    <div className={s.skills}>{skills}</div>
    <div className={s.experience}>{experience}</div>
    <div className={s.education}>{education}</div>
  </div>
);

export default memo(MainLayout);
