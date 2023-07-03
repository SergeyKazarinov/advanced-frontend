export enum ArticleTypeEnum {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',

}

export enum ArticleBlockTypeEnum {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',

}

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

export type TArticleBlock = IArticleCodeBlock | IArticleImageBlock | IArticleTextBlock;

export interface IArticle {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: string[];
  block: TArticleBlock[];
}
