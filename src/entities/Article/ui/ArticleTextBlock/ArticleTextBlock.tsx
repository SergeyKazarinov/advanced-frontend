import { FC, memo } from 'react';

import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { TextComponent as TextComponentDeprecated } from '@shared/ui/deprecated/TextComponent';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { IArticleTextBlock } from '../../model/types/article';

import s from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string;
  block: IArticleTextBlock;
}

const ArticleTextBlock: FC<ArticleTextBlockProps> = ({ className, block }) => (
  <div className={classNames(s.articleTextBlock, {}, [className])}>
    {block.title && (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<TextComponent title={block.title} className={s.title} />}
        off={<TextComponentDeprecated title={block.title} className={s.title} />}
      />
    )}
    {block.paragraphs.map((paragraph) => (
      <ToggleFeatures
        key={paragraph}
        feature="isAppRedesigned"
        on={<TextComponent key={paragraph} text={paragraph} className={s.paragraph} />}
        off={<TextComponentDeprecated key={paragraph} text={paragraph} className={s.paragraph} />}
      />
    ))}
  </div>
);

export default memo(ArticleTextBlock);
