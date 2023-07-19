import {
  FC, HTMLAttributeAnchorTarget, memo,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
  List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { classNames } from 'shared/lib/classNames';
import { TextAlignEnum, TextComponent, TextSizeEnum } from 'shared/ui/TextComponent';
import { PAGE_ID } from 'widgets/Page/Page';
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
  virtualized?: boolean
}

const ArticleList: FC<ArticleListProps> = ({
  className,
  articles,
  isLoading,
  view = ArticleViewEnum.SMALL,
  target,
  virtualized = true,
}) => {
  const { t } = useTranslation('article');

  const isBig = view === ArticleViewEnum.BIG;

  const itemsPerRow = isBig ? 1 : 3;

  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const getSkeletons = (view: ArticleViewEnum) => (
    new Array(view === ArticleViewEnum.SMALL ? 9 : 3)
      .fill(0)
      .map((item, index) => (
        // eslint-disable-next-line
        <ArticleListItemSkeleton key={index} view={view} />
      ))
  );

  const rowRenderer = ({
    index, isScrolling, key, style,
  }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          view={view}
          article={articles[i]}
          className={s.card}
          target={target}
          key={`str${i}`}
        />,
      );
    }
    return (
      <div key={key} style={style} className={s.row}>
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(s.articleList, {}, [className, s[view]])}>
        <TextComponent size={TextSizeEnum.L} text={t('Articles not found')} align={TextAlignEnum.CENTER} />
      </div>
    );
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        width, height, isScrolling, scrollTop, onChildScroll,
      }) => (
        <div
          className={classNames(s.articleList, {}, [className, s[view]])}
        >
          {virtualized
            ? (
              <List
                height={height ?? 700}
                rowCount={rowCount}
                rowHeight={isBig ? 700 : 330}
                rowRenderer={rowRenderer}
                width={width ? width - 80 : 700}
                autoHeight
                onScroll={onChildScroll}
                isScrolling={isScrolling}
                scrollTop={scrollTop}
              />

            )
            : (
              articles.map((item) => (
                <ArticleListItem
                  view={view}
                  article={item}
                  className={s.card}
                  target={target}
                  key={item.id}
                />
              ))
            )}

          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
};

export default memo(ArticleList);
