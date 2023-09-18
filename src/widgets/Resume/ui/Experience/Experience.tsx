import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import ExperienceItem, { IExperienceItem } from '../ExperienceItem/ExperienceItem';

import s from './Experience.module.scss';

const experienceList: IExperienceItem[] = [
  {
    job: 'Bawaga',
    jobTitle: 'Frontend developer',
    startDate: '01.2023',
    endDate: 'Present',
    responsibilities: ['implementation', 'integration with the backend', 'displaying analytical data'],
  },
  {
    job: 'Yandex.Practicum',
    jobTitle: 'Mentor',
    startDate: '11.2022',
    endDate: 'Present',
    responsibilities: ['planning', 'management', 'conduct code reviews', 'webinar'],
  },
];

const Experience: FC = () => {
  const { t } = useTranslation('main');
  return (
    <VStack max gap="32">
      <TextComponent title={t('Experience')} align="center" className={s.title} variant="accent" />
      {experienceList.map((item) => (
        <ExperienceItem item={item} />
      ))}
    </VStack>
  );
};

export default memo(Experience);
