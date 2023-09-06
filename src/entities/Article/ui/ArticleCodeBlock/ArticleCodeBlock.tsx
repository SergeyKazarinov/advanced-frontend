import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@shared/lib/classNames';
import { Code } from '@shared/ui/deprecated/Code';

import { IArticleCodeBlock } from '../../model/types/article';

import s from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
  block: IArticleCodeBlock;
}

const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({ className, block }) => {
  const { t } = useTranslation('article');
  return (
    <div className={classNames(s.articleCodeBlock, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
};

export default memo(ArticleCodeBlock);
