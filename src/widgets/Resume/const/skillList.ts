import { BiLogoJavascript, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { DiSass } from 'react-icons/di';
import { IconType } from 'react-icons/lib';
import {
  SiAxios,
  SiBootstrap,
  SiCypress,
  SiExpress,
  SiHeadlessui,
  SiJest,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiReduxsaga,
  SiStorybook,
  SiVite,
  SiWebpack,
} from 'react-icons/si';

import Effector from '@shared/assets/icons/effector.svg';

export interface ISkill {
  name: string;
  Icon?: IconType;
  svg?: React.VFC<React.SVGProps<SVGSVGElement>>;
}
export const skillList: ISkill[] = [
  {
    name: 'JavaScript',
    Icon: BiLogoJavascript,
  },
  {
    name: 'TypeScript',
    Icon: BiLogoTypescript,
  },
  {
    name: 'SCSS/Sass',
    Icon: DiSass,
  },
  {
    name: 'Tailwind',
    Icon: BiLogoTailwindCss,
  },
  {
    name: 'React',
    Icon: BiLogoReact,
  },
  {
    name: 'Next.js',
    Icon: SiNextdotjs,
  },
  {
    name: 'Redux/Redux Toolkit',
    Icon: BiLogoRedux,
  },
  {
    name: 'Redux Saga',
    Icon: SiReduxsaga,
  },
  {
    name: 'Efefctor',
    svg: Effector,
  },
  {
    name: 'Axios',
    Icon: SiAxios,
  },
  {
    name: 'Bootstrap',
    Icon: SiBootstrap,
  },
  {
    name: 'Material UI',
    Icon: SiMui,
  },
  {
    name: 'Headless UI',
    Icon: SiHeadlessui,
  },
  {
    name: 'Jest',
    Icon: SiJest,
  },
  {
    name: 'Cypress',
    Icon: SiCypress,
  },
  {
    name: 'Storybook',
    Icon: SiStorybook,
  },
  {
    name: 'Webpack',
    Icon: SiWebpack,
  },
  {
    name: 'Vite',
    Icon: SiVite,
  },
  {
    name: 'Express.js',
    Icon: SiExpress,
  },
  {
    name: 'Mongodb',
    Icon: SiMongodb,
  },
];
