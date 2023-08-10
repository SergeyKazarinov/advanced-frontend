import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '@entities/Article';
import { TextComponent, TextThemeEnum } from '@shared/ui/TextComponent';

import { getArticlePageError } from '../../model/selectors/getArticlePageError/getArticlePageError';
import { getArticlePageIsLoading } from '../../model/selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';
import { getArticles } from '../../model/slice/articlePageSlice';

interface ArticleInfiniteListProps {
  className?: string;
}

const ArticleInfiniteList: FC<ArticleInfiniteListProps> = ({ className }) => {
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getArticlePageView);
  const error = useSelector(getArticlePageError);

  if (error) {
    return <TextComponent text={error} theme={TextThemeEnum.ERROR} />;
  }

  return (
    <ArticleList
      isLoading={isLoading}
      articles={articles}
      view={view}
      className={className}
    />
  );
};

export default memo(ArticleInfiniteList);
