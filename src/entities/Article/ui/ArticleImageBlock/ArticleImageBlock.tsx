import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@shared/lib/classNames';
import { TextAlignEnum, TextComponent } from '@shared/ui/TextComponent';

import { IArticleImageBlock } from '../../model/types/article';

import s from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string;
  block: IArticleImageBlock;
}

const ArticleImageBlock: FC<ArticleImageBlockProps> = ({
  className,
  block,
}) => {
  const { t } = useTranslation('article');
  return (
    <div className={classNames(s.articleImageBlock, {}, [className])}>
      <img src={block.src} alt={block.title} className={s.image} />
      {block.title && (
        <TextComponent text={block.title} align={TextAlignEnum.CENTER} />
      )}
    </div>
  );
};

export default memo(ArticleImageBlock);
