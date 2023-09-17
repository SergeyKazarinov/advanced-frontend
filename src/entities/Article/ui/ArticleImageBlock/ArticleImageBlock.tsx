import { FC, memo } from 'react';

import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import { TextAlignEnum, TextComponent as TextComponentDeprecated } from '@shared/ui/deprecated/TextComponent';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { IArticleImageBlock } from '../../model/types/article';

import s from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string;
  block: IArticleImageBlock;
}

const ArticleImageBlock: FC<ArticleImageBlockProps> = ({ className, block }) => (
  <div className={classNames(s.articleImageBlock, {}, [className])}>
    <img src={block.src} alt={block.title} className={s.image} />
    {block.title && (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<TextComponent text={block.title} align="center" />}
        off={<TextComponentDeprecated text={block.title} align={TextAlignEnum.CENTER} />}
      />
    )}
  </div>
);

export default memo(ArticleImageBlock);
