import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { Link } from '@shared/ui/redesigned/Link';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { projectsList } from '../../const/projectList';
import ProjectItem from '../ProjectItem/ProjectItem';

import s from './Projects.module.scss';

const Projects: FC = () => {
  const { t } = useTranslation('main');
  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ opacity: 0, translateX: 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <VStack max>
        <TextComponent title={t('Projects')} align="center" className={s.title} variant="accent" />
        {projectsList.map((item) => (
          <ProjectItem item={item} key={item.link} />
        ))}
        <HStack max justify="center" align="center">
          <TextComponent text={t('More projects')} />
          <Link href="https://kazarinov.nomoredomains.club/">{t('Here')}</Link>
        </HStack>
      </VStack>
    </motion.div>
  );
};

export default memo(Projects);
