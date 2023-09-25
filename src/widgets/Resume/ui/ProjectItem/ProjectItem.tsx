import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@shared/ui/redesigned/Card';
import { Link } from '@shared/ui/redesigned/Link';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { IProjectItem } from '../../const/projectList';

import s from './ProjectItem.module.scss';

interface ProjectItemProps {
  item: IProjectItem;
}

const ProjectItem: FC<ProjectItemProps> = ({ item }) => {
  const { t } = useTranslation('main');
  return (
    <Card variant="light" padding="16" max>
      <VStack max>
        <TextComponent title={t(item.name)} />
        <ul>
          {item.responsibilities.map((responsibility) => (
            <li key={responsibility} className={s.responsibility}>
              <TextComponent text={t(responsibility)} />
            </li>
          ))}
        </ul>
        <HStack>
          <TextComponent text={t('Stack')} />
          <TextComponent text={item.stacks.join(', ')} />
        </HStack>
        <HStack justify="between" max>
          <Link href={item.link}>{t('Link to GitHub')}</Link>
          {item.site && <Link href={item.site}>{t('Link to Website')}</Link>}
        </HStack>
      </VStack>
    </Card>
  );
};

export default memo(ProjectItem);
