import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { TextAlignEnum, TextComponent, TextSizeEnum } from 'shared/ui/TextComponent';
import s from './ArticleList.module.scss';
import { ArticleViewEnum, IArticle } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';

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
  const { t } = useTranslation('article');

  const renderArticle = (article: IArticle) => (
    <ArticleListItem key={article.id} view={view} article={article} className={s.card} />
  );

  const getSkeletons = (view: ArticleViewEnum) => (
    new Array(view === ArticleViewEnum.SMALL ? 9 : 3)
      .fill(0)
      .map((item, index) => (
        // eslint-disable-next-line
        <ArticleListItemSkeleton key={index} view={view} />
      ))
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(s.articleList, {}, [className, s[view]])}>
        <TextComponent size={TextSizeEnum.L} text={t('Articles not found')} align={TextAlignEnum.CENTER} />
      </div>
    );
  }

  return (
    <div className={classNames(s.articleList, {}, [className, s[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};

export default memo(ArticleList);
