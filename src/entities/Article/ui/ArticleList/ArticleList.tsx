import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures } from '@shared/lib/features';
import {
  TextAlignEnum,
  TextComponent as TextComponentDeprecated,
  TextSizeEnum,
} from '@shared/ui/deprecated/TextComponent';
import { HStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

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

  const getSkeletons = (view: ArticleViewEnum) =>
    new Array(view === ArticleViewEnum.SMALL ? 12 : 3).fill(0).map((item, index) => (
      // eslint-disable-next-line
      <ArticleListItemSkeleton key={index} view={view} />
    ));

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(s.articleList, {}, [className, s[view]])}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<TextComponent size={TextSizeEnum.L} text={t('Articles not found')} align={TextAlignEnum.CENTER} />}
          off={
            <TextComponentDeprecated
              size={TextSizeEnum.L}
              text={t('Articles not found')}
              align={TextAlignEnum.CENTER}
            />
          }
        />
      </div>
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <HStack
          gap="16"
          wrap="wrap"
          className={classNames(s.articleListRedesigned, {}, [className])}
          data-testid="ArticleList"
        >
          {articles.map((item) => (
            <ArticleListItem view={view} article={item} className={s.card} target={target} key={item.id} />
          ))}
          {isLoading && getSkeletons(view)}
        </HStack>
      }
      off={
        <div className={classNames(s.articleList, {}, [className, s[view]])} data-testid="ArticleList">
          {articles.map((item) => (
            <ArticleListItem view={view} article={item} className={s.card} target={target} key={item.id} />
          ))}
          {isLoading && getSkeletons(view)}
        </div>
      }
    />
  );
};

export default memo(ArticleList);
