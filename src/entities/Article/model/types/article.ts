import { IUser } from '@entities/User';

import { ArticleBlockTypeEnum, ArticleTypeEnum } from '../consts/consts';

export interface IArticleBlockBase {
  id: string;
  type: ArticleBlockTypeEnum;
}

export interface IArticleCodeBlock extends IArticleBlockBase {
  type: ArticleBlockTypeEnum.CODE;
  code: string;
}

export interface IArticleImageBlock extends IArticleBlockBase {
  type: ArticleBlockTypeEnum.IMAGE;
  src: string;
  title: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
  type: ArticleBlockTypeEnum.TEXT;
  title: string;
  paragraphs: string[];
}

export type TArticleBlock =
  | IArticleCodeBlock
  | IArticleImageBlock
  | IArticleTextBlock;

export interface IArticle {
  id: string;
  user: IUser;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleTypeEnum[];
  blocks: TArticleBlock[];
}
