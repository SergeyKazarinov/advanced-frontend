import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@shared/ui/redesigned/Card';
import { Link } from '@shared/ui/redesigned/Link';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import s from './ExperienceItem.module.scss';

export interface IExperienceItem {
  job: string;
  jobTitle?: string;
  startDate?: string;
  endDate?: string;
  responsibilities: string[];
  link?: string;
  stacks?: string[];
}

interface ExperienceItemProps {
  item: IExperienceItem;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ item }) => {
  const { t } = useTranslation('main');
  return (
    <Card variant="light" padding="16" max>
      <VStack max>
        <TextComponent title={t(item.job)} />
        <HStack justify="between" max>
          {item.jobTitle && <TextComponent text={t(item.jobTitle)} />}
          {item.startDate && item.endDate && <TextComponent text={`${t(item.startDate)} - ${t(item.endDate)}`} />}
        </HStack>
        <ul>
          {item.responsibilities.map((responsibility) => (
            <li key={responsibility} className={s.responsibility}>
              <TextComponent text={t(responsibility)} />
            </li>
          ))}
        </ul>
        {item.stacks && (
          <HStack>
            <TextComponent text={t('Stack')} />
            <TextComponent text={item.stacks.join(', ')} />
          </HStack>
        )}
        {item.link && (
          <Link href={item.link}>
            <TextComponent text={t('Link to GitHub')} />
          </Link>
        )}
      </VStack>
    </Card>
  );
};

export default memo(ExperienceItem);
