import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line kss-fsd-imports/layer-imports
import { IArticleCreateBlock } from '@pages/ArticleCreatePage';
import { useDragAndDrop } from '@shared/lib/hooks/useDragAndDrop';
import { Card } from '@shared/ui/redesigned/Card';
import { Textarea } from '@shared/ui/redesigned/TextArea';

import s from './ArticleCreateCodeBlock.module.scss';

interface ArticleCreateCodeBlockProps {
  className?: string;
}

const ArticleCreateCodeBlock: FC<ArticleCreateCodeBlockProps> = ({ className }) => {
  const { t } = useTranslation('article');

  const handleDrop = (item: IArticleCreateBlock) => {
    console.log(item);
  };

  const { dropTarget, dragRef, isHover } = useDragAndDrop({
    accept: 'articleCreate',
    type: 'articleCreate',
    dropCallback: handleDrop,
  });

  return (
    <div ref={dropTarget} className={className} style={{ width: '100%' }}>
      <div ref={dragRef}>
        <Card variant="normal" padding="16" max className={`${isHover && s.hovered}`}>
          <Textarea label={t('Add code')} />
        </Card>
      </div>
    </div>
  );
};

export default memo(ArticleCreateCodeBlock);
