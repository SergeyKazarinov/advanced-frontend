import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@shared/lib/classNames';
import { TextComponent } from '@shared/ui/TextComponent';

import { IArticleTextBlock } from '../../model/types/article';

import s from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string;
  block: IArticleTextBlock;
}

const ArticleTextBlock: FC<ArticleTextBlockProps> = ({ className, block }) => {
  const { t } = useTranslation('article');
  return (
    <div className={classNames(s.articleTextBlock, {}, [className])}>
      {block.title && <TextComponent title={block.title} className={s.title} />}
      {block.paragraphs.map((paragraph) => (
        <TextComponent
          key={paragraph}
          text={paragraph}
          className={s.paragraph}
        />
      ))}
    </div>
  );
};

export default memo(ArticleTextBlock);
