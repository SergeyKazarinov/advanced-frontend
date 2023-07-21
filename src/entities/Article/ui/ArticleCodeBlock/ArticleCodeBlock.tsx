import { FC, memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Code } from '@shared/ui/Code';
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
