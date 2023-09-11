import { FC, memo } from 'react';
import { IoLogoOctocat } from 'react-icons/io';
import { classNames } from '@shared/lib/classNames';

import { HStack } from '../Stack';

import s from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
  size?: number;
}

const AppLogo: FC<AppLogoProps> = ({ className, size = 50 }) => (
  <HStack max justify="center" className={classNames(s.appLogoWrapper, {}, [className])}>
    <IoLogoOctocat size={size} className={s.appLogo} />
    <div className={s.gradientBig} />
    <div className={s.gradientBig} />
  </HStack>
);

export default memo(AppLogo);
