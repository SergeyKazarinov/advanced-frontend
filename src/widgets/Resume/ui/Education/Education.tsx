import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { educationList } from '../../const/educationList';

import s from './Education.module.scss';

const Education: FC = () => {
  const { t } = useTranslation('main');
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <VStack>
        <TextComponent title={t('Education')} align="center" className={s.title} variant="accent" />
        {educationList.map((item) => (
          <TextComponent key={item.name} title={t(item.name)} text={t(item.speciality)} size="size_m" />
        ))}
      </VStack>
    </motion.div>
  );
};

export default memo(Education);
