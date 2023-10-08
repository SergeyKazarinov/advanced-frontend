import { FC, memo } from 'react';

import { useDragAndDrop } from '@shared/lib/hooks/useDragAndDrop';
import { Button } from '@shared/ui/redesigned/Button';

import { IArticleCreateBlock } from '../ArticleCreateBlockButtonContainer/ArticleCreateBlockButtonContainer';

import s from './ArticleCreateBlockButton.module.scss';

interface ArticleCreateBlockButtonProps {
  articleCreateBlock: IArticleCreateBlock;
  onAddBlock: (articleCreateBlock: IArticleCreateBlock) => void;
}

const ArticleCreateBlockButton: FC<ArticleCreateBlockButtonProps> = ({ articleCreateBlock, onAddBlock }) => {
  const { dragRef } = useDragAndDrop({ type: 'articleCreate', dragItem: articleCreateBlock });

  const handleAddBlock = () => {
    onAddBlock(articleCreateBlock);
  };

  return (
    <div ref={dragRef} className={s.articleCreateBlockButton}>
      <Button variant="filled" className={s.articleCreateBlock} onClick={handleAddBlock}>
        {articleCreateBlock.content}
      </Button>
    </div>
  );
};

export default memo(ArticleCreateBlockButton);
