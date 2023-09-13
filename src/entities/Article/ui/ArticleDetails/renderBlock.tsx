import { ArticleBlockTypeEnum } from '../../model/consts/consts';
import { TArticleBlock } from '../../model/types/article';
import ArticleCodeBlock from '../ArticleCodeBlock/ArticleCodeBlock';
import ArticleImageBlock from '../ArticleImageBlock/ArticleImageBlock';
import ArticleTextBlock from '../ArticleTextBlock/ArticleTextBlock';

export const renderBlock = (block: TArticleBlock) => {
  switch (block.type) {
    case ArticleBlockTypeEnum.CODE:
      return <ArticleCodeBlock key={block.id} block={block} />;
    case ArticleBlockTypeEnum.IMAGE:
      return <ArticleImageBlock key={block.id} block={block} />;
    case ArticleBlockTypeEnum.TEXT:
      return <ArticleTextBlock key={block.id} block={block} />;
    default:
      return null;
  }
};
