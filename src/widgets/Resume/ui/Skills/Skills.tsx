import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { Icon } from '@shared/ui/redesigned/Icon';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { skillList } from '../../const/skillList';

import s from './Skills.module.scss';

const Skills: FC = () => {
  const { t } = useTranslation('main');
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <VStack>
        <TextComponent title={t('Skills')} align="center" className={s.title} variant="accent" />
        <VStack className={s.skills} wrap="wrap">
          {skillList.map((skill) => (
            <HStack key={skill.name}>
              {skill.Icon && <skill.Icon size={24} className={s.icon} />}
              {skill.svg && <Icon Svg={skill.svg} className={s.icon} />}
              {skill.name}
            </HStack>
          ))}
        </VStack>
      </VStack>
    </motion.div>
  );
};

export default memo(Skills);
