import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
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
import { Icon } from '@shared/ui/redesigned/Icon';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import s from './Skills.module.scss';

interface ISkill {
  name: string;
  Icon?: IconType;
  svg?: React.VFC<React.SVGProps<SVGSVGElement>>;
}
const skillList: ISkill[] = [
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
const Skills: FC = () => {
  const { t } = useTranslation('main');
  return (
    <VStack>
      <TextComponent title={t('Skills')} align="center" className={s.title} variant="accent" />
      <VStack className={s.skills} wrap="wrap">
        {skillList.map((skill) => (
          <HStack>
            {skill.Icon && <skill.Icon size={24} className={s.icon} />}
            {skill.svg && <Icon Svg={skill.svg} className={s.icon} />}
            {skill.name}
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default memo(Skills);
