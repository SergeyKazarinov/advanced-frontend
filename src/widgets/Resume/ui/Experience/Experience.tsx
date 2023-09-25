import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { experienceList } from '../../const/experienceList';
import ExperienceItem from '../ExperienceItem/ExperienceItem';

import s from './Experience.module.scss';

const Experience: FC = () => {
  const { t } = useTranslation('main');
  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ opacity: 0, translateX: 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <VStack max gap="32">
        <TextComponent title={t('Experience')} align="center" className={s.title} variant="accent" />
        {experienceList.map((item) => (
          <ExperienceItem item={item} key={item.job} />
        ))}
      </VStack>
    </motion.div>
  );
};

export default memo(Experience);
