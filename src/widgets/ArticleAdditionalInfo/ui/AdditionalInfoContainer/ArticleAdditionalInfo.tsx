import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { IUser } from '@entities/User';
import { ArticleEditButton } from '@features/ArticleEditButton';
import { classNames } from '@shared/lib/classNames';
import { Avatar } from '@shared/ui/redesigned/Avatar';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: IUser;
  createdAt: string;
  views: number;
  canEdit: boolean;
}

const ArticleAdditionalInfo: FC<ArticleAdditionalInfoProps> = ({ className, author, createdAt, views, canEdit }) => {
  const { t } = useTranslation('article');

  return (
    <VStack gap="32" className={classNames('', {}, [className])}>
      <HStack>
        <Avatar src={author.avatar} size={32} />
        <TextComponent text={author.username} bold />
        <TextComponent text={createdAt} />
      </HStack>
      {canEdit && <ArticleEditButton />}
      <TextComponent text={t('{{count}} views', { count: views })} />
    </VStack>
  );
};

export default memo(ArticleAdditionalInfo);
