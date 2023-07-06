import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import s from './ArticleList.module.scss';
import { ArticleViewEnum, IArticle } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: IArticle[];
  isLoading?: boolean;
  view?: ArticleViewEnum;
}

const ArticleList: FC<ArticleListProps> = ({
  className,
  articles,
  isLoading,
  view = ArticleViewEnum.SMALL,
}) => {
  const { t } = useTranslation();

  const renderArticle = (article: IArticle) => (
    <ArticleListItem key={article.id} view={view} article={article} className={s.card} />
  );

  return (
    <div className={classNames(s.articleList, {}, [className, s[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
    </div>
  );
};

export default memo(ArticleList);
