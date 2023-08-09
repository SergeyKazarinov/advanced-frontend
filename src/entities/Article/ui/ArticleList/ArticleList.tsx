import { classNames } from '@shared/lib/classNames';
import { TextAlignEnum, TextComponent, TextSizeEnum } from '@shared/ui/TextComponent';
import {
  FC, HTMLAttributeAnchorTarget, memo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleViewEnum } from '../../model/consts/consts';
import { IArticle } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';
import s from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: IArticle[];
  isLoading?: boolean;
  view?: ArticleViewEnum;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleList: FC<ArticleListProps> = ({
  className,
  articles,
  isLoading,
  view = ArticleViewEnum.SMALL,
  target,
}) => {
  const { t } = useTranslation('article');

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
    <div
      className={classNames(s.articleList, {}, [className, s[view]])}
      data-testid="ArticleList"
    >

      {articles.map((item) => (
        <ArticleListItem
          view={view}
          article={item}
          className={s.card}
          target={target}
          key={item.id}
        />
      ))}

      {isLoading && getSkeletons(view)}
    </div>

  );
};

export default memo(ArticleList);
