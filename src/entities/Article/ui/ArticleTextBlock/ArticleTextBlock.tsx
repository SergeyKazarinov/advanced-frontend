import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { TextComponent } from 'shared/ui/TextComponent';
import s from './ArticleTextBlock.module.scss';
import { IArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockProps {
  className?: string;
  block: IArticleTextBlock;
}

const ArticleTextBlock: FC<ArticleTextBlockProps> = ({ className, block }) => {
  const { t } = useTranslation('article');
  return (
    <div className={classNames(s.articleTextBlock, {}, [className])}>
      {block.title && (
        <TextComponent title={block.title} className={s.title} />
      )}
      {block.paragraphs.map((paragraph) => (
        <TextComponent key={paragraph} text={paragraph} className={s.paragraph} />
      ))}
    </div>
  );
};

export default memo(ArticleTextBlock);
