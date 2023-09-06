import { FC, memo } from 'react';
import { IoLogoOctocat } from 'react-icons/io';
import { classNames } from '@shared/lib/classNames';

import { HStack } from '../Stack';

import s from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
}

const AppLogo: FC<AppLogoProps> = ({ className }) => (
  <HStack max justify="center" className={classNames(s.appLogoWrapper, {}, [className])}>
    <div className={s.gradientBig} />
    <div className={s.gradientBig} />
    <IoLogoOctocat size={60} />
  </HStack>
);

/**
 * Этот компонент устарел и не рекомендуется к использованию
 * @deprecated
 */
export default memo(AppLogo);
