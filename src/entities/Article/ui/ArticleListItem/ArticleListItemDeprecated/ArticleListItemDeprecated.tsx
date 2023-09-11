import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillEye } from 'react-icons/ai';
import { getRouteArticlesDetails } from '@shared/const/router';
import { classNames } from '@shared/lib/classNames';
import { AppLink } from '@shared/ui/deprecated/AppLink';
import { Avatar } from '@shared/ui/deprecated/Avatar';
import { Button, ThemeButtonEnum } from '@shared/ui/deprecated/Button';
import { Card } from '@shared/ui/deprecated/Card';
import { Skeleton } from '@shared/ui/deprecated/Skeleton';
import { TextComponent } from '@shared/ui/deprecated/TextComponent';
import { AppImage } from '@shared/ui/redesigned/AppImage';

import { ArticleBlockTypeEnum, ArticleViewEnum } from '../../../model/consts/consts';
import { IArticleTextBlock } from '../../../model/types/article';
import ArticleTextBlock from '../../ArticleTextBlock/ArticleTextBlock';
import { ArticleListItemProps } from '../ArticleListItem';

import s from './ArticleListItemDeprecated.module.scss';

const ArticleListItemDeprecated: FC<ArticleListItemProps> = ({ className, article, view, target }) => {
  const { t } = useTranslation('article');

  const types = <TextComponent text={article.type.join(', ')} className={s.types} />;
  const views = (
    <>
      <TextComponent text={String(article.views)} className={s.views} />
      <AiFillEye />
    </>
  );

  if (view === ArticleViewEnum.BIG) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockTypeEnum.TEXT) as IArticleTextBlock;
    return (
      <div data-testid="ArticleListItem" className={classNames(s.articleListItem, {}, [className, s[view]])}>
        <Card>
          <div className={s.header}>
            <Avatar size={30} src={article.user.avatar} />
            <TextComponent text={article.user.username} className={s.username} />
            <TextComponent text={article.createdAt} className={s.date} />
          </div>
          <TextComponent title={article.title} className={s.title} />
          {types}
          <AppImage
            src={article.img}
            className={s.image}
            alt={article.title}
            fallback={<Skeleton width="100%" height={250} />}
          />
          {textBlock && <ArticleTextBlock block={textBlock} className={s.textBlock} />}
          <div className={s.footer}>
            <AppLink to={getRouteArticlesDetails(article.id)}>
              <Button theme={ThemeButtonEnum.CLEAR}>{t('Read more')}</Button>
            </AppLink>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticlesDetails(article.id)}
      className={classNames(s.articleListItem, {}, [className, s[view]])}
    >
      <Card>
        <div className={s.imageWrapper}>
          <AppImage
            src={article.img}
            className={s.image}
            alt={article.title}
            fallback={<Skeleton width={200} height={200} />}
          />
          <TextComponent text={article.createdAt} className={s.date} />
        </div>
        <div className={s.infoWrapper}>
          {types}
          {views}
        </div>
        <TextComponent text={article.title} className={s.title} />
      </Card>
    </AppLink>
  );
};

export default memo(ArticleListItemDeprecated);
