import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleBlockTypeEnum } from '@entities/Article';
import { classNames } from '@shared/lib/classNames';
import { Card } from '@shared/ui/redesigned/Card';
import { VStack } from '@shared/ui/redesigned/Stack';

import ArticleCreateBlockButton from '../ArticleCreateBlockButton/ArticleCreateBlockButton';

import s from './ArticleCreateBlockButtonContainer.module.scss';

export interface IArticleCreateBlock {
  value: ArticleBlockTypeEnum;
  content: string;
}

interface ArticleCreateBlockButtonContainerProps {
  className?: string;
  onAddBlock: (articleCreateBlock: IArticleCreateBlock) => void;
}

const ArticleCreateBlockButtonContainer: FC<ArticleCreateBlockButtonContainerProps> = ({ className, onAddBlock }) => {
  const { t } = useTranslation('article');
  const articleCreateBlockList: IArticleCreateBlock[] = [
    {
      value: ArticleBlockTypeEnum.TEXT,
      content: t('Add text block'),
    },
    {
      value: ArticleBlockTypeEnum.IMAGE,
      content: t('Add image block'),
    },
    {
      value: ArticleBlockTypeEnum.CODE,
      content: t('Add code block'),
    },
  ];
  return (
    <Card
      className={classNames(s.ArticleCreateBlockButtonContainer, {}, [className])}
      max
      padding="16"
      border="round"
      variant="light"
    >
      <VStack gap="16">
        {articleCreateBlockList.map((articleCreateBlock) => (
          <ArticleCreateBlockButton
            articleCreateBlock={articleCreateBlock}
            key={articleCreateBlock.value}
            onAddBlock={onAddBlock}
          />
        ))}
      </VStack>
    </Card>
  );
};

export default memo(ArticleCreateBlockButtonContainer);
