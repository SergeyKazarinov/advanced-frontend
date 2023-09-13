import { FC, memo } from 'react';

import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { Code as CodeDeprecated } from '@shared/ui/deprecated/Code';
import { Code } from '@shared/ui/redesigned/Code';

import { IArticleCodeBlock } from '../../model/types/article';

import s from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
  block: IArticleCodeBlock;
}

const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({ className, block }) => (
  <div className={classNames(s.articleCodeBlock, {}, [className])}>
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Code text={block.code} />}
      off={<CodeDeprecated text={block.code} />}
    />
  </div>
);

export default memo(ArticleCodeBlock);
