import {
  ARTICLE, ArticleList, ArticleViewEnum,
} from '@entities/Article';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import s from './ArticlesPage.module.scss';

const ArticlesPage: FC = () => {
  const { t } = useTranslation('article');
  return (
    <div className={s.articlePage}>
      <ArticleList
        articles={
          new Array(16)
            .fill(0)
            .map((item, index) => ({ ...ARTICLE, id: String(index) }))
        }
        view={ArticleViewEnum.SMALL}
      />
    </div>
  );
};

export default ArticlesPage;
