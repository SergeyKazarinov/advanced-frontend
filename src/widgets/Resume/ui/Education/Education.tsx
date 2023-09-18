import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import s from './Education.module.scss';

const educationList = [
  {
    name: 'Yandex.Practicum',
    speciality: 'Web-developer',
  },
  {
    name: 'Perm State University',
    speciality: 'Specialist in Chemical Sciences',
  },
];

const Education: FC = () => {
  const { t } = useTranslation('main');
  return (
    <VStack>
      <TextComponent title={t('Education')} align="center" className={s.title} variant="accent" />
      {educationList.map((item) => (
        <TextComponent title={t(item.name)} text={t(item.speciality)} size="size_m" />
      ))}
    </VStack>
  );
};

export default memo(Education);
