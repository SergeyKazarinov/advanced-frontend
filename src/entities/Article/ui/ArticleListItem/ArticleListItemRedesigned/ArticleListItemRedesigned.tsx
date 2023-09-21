import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillEye } from 'react-icons/ai';

import { getRouteArticlesDetails } from '@shared/const/router';
import { classNames } from '@shared/lib/classNames';
import { AppImage } from '@shared/ui/redesigned/AppImage';
import { AppLink } from '@shared/ui/redesigned/AppLink';
import { Avatar } from '@shared/ui/redesigned/Avatar';
import { Button } from '@shared/ui/redesigned/Button';
import { Card } from '@shared/ui/redesigned/Card';
import { Skeleton } from '@shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { ArticleBlockTypeEnum, ArticleViewEnum } from '../../../model/consts/consts';
import { IArticleTextBlock } from '../../../model/types/article';
import { ArticleListItemProps } from '../ArticleListItem';

import s from './ArticleListItemRedesigned.module.scss';

const ArticleListItemRedesigned: FC<ArticleListItemProps> = ({ className, article, view, target }) => {
  const { t } = useTranslation('article');

  const views = (
    <HStack>
      <AiFillEye />
      <TextComponent text={String(article.views)} className={s.views} />
    </HStack>
  );

  if (view === ArticleViewEnum.BIG) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockTypeEnum.TEXT) as IArticleTextBlock;
    return (
      <Card
        data-testid="ArticleListItem"
        className={classNames(s.articleListItem, {}, [className, s[view]])}
        max
        padding="24"
      >
        <VStack max gap="16">
          <HStack>
            <Avatar size={32} src={article.user.avatar} />
            <TextComponent bold text={article.user.username} />
            <TextComponent text={article.createdAt} />
          </HStack>
          <TextComponent bold title={article.title} />
          <TextComponent title={article.subtitle} />
          <AppImage
            src={article.img}
            className={s.image}
            alt={article.title}
            fallback={<Skeleton width="100%" height={313} />}
          />
          {textBlock?.paragraphs && (
            <TextComponent text={textBlock.paragraphs.slice(0, 2).join(' ')} className={s.textBlock} />
          )}
          <HStack max justify="between">
            <AppLink to={getRouteArticlesDetails(article.id)}>
              <Button variant="outline">{t('Read more')}</Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    );
  }

  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticlesDetails(article.id)}
      className={classNames(s.articleListItem, {}, [className, s[view]])}
    >
      <Card className={s.card} border="round" padding="0">
        <AppImage
          src={article.img}
          className={s.image}
          alt={article.title}
          fallback={<Skeleton width="100%" height={200} />}
        />
        <VStack className={s.info} gap="4" max>
          <TextComponent bold title={article.title} className={s.title} />
          <VStack gap="4" className={s.footer} max>
            <HStack justify="between" max>
              <TextComponent text={article.createdAt} className={s.date} />
              {views}
            </HStack>
            <HStack>
              <Avatar size={32} src={article.user.avatar} className={s.avatar} />
              <TextComponent bold text={article.user.username} />
            </HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  );
};

export default memo(ArticleListItemRedesigned);
