import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig';
import { classNames } from 'shared/lib/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ThemeButtonEnum } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';
import { TextComponent } from 'shared/ui/TextComponent';
import {
  ArticleBlockTypeEnum, ArticleViewEnum, IArticle, IArticleTextBlock,
} from '../../model/types/article';
import ArticleTextBlock from '../ArticleTextBlock/ArticleTextBlock';
import s from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: IArticle;
  view: ArticleViewEnum;
}

const ArticleListItem: FC<ArticleListItemProps> = ({ className, article, view }) => {
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const handleOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [navigate, article.id]);

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
      <div className={classNames(s.articleListItem, {}, [className, s[view]])}>
        <Card>
          <div className={s.header}>
            <Avatar size={30} src={article.user.avatar} />
            <TextComponent text={article.user.username} className={s.username} />
            <TextComponent text={article.createdAt} className={s.date} />
          </div>
          <TextComponent title={article.title} className={s.title} />
          {types}
          <img src={article.img} className={s.image} alt={article.title} />
          {textBlock && (
            <ArticleTextBlock block={textBlock} className={s.textBlock} />
          )}
          <div className={s.footer}>
            <Button
              theme={ThemeButtonEnum.CLEAR}
              onClick={handleOpenArticle}
            >
              {t('Read more')}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(s.articleListItem, {}, [className, s[view]])}>
      <Card onClick={handleOpenArticle}>
        <div className={s.imageWrapper}>
          <img src={article.img} className={s.image} alt={article.title} />
          <TextComponent text={article.createdAt} className={s.date} />

        </div>
        <div className={s.infoWrapper}>
          {types}
          {views}
        </div>
        <TextComponent text={article.title} className={s.title} />
      </Card>
    </div>
  );
};

export default memo(ArticleListItem);
