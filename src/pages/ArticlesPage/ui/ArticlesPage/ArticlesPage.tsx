import {
  ARTICLE, ArticleList, ArticleViewEnum,
} from '@entities/Article';
import { FC } from 'react';
import s from './ArticlesPage.module.scss';

const ArticlesPage: FC = () => (
  <div className={s.articlePage}>
    <ArticleList
      articles={
        new Array(16)
          .fill(0)
          .map((item, index) => ({ ...ARTICLE, id: String(index) }))
      }
      view={ArticleViewEnum.BIG}
    />
  </div>
);

export default ArticlesPage;
