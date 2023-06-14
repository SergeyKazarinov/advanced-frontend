import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;

}

const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(s.navbar, {}, [className])}>

    <div className={s.links} />
  </div>
);

export default Navbar;
