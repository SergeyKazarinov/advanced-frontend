import {
  FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillEye } from 'react-icons/ai';
import { ImCalendar } from 'react-icons/im';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton';
import { HStack, VStack } from 'shared/ui/Stack';
import { TextComponent, TextSizeEnum } from 'shared/ui/TextComponent';
import { ArticleBlockTypeEnum } from '../../model/consts/consts';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import {
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import fetchArticleById from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { TArticleBlock } from '../../model/types/article';
import ArticleCodeBlock from '../ArticleCodeBlock/ArticleCodeBlock';
import ArticleImageBlock from '../ArticleImageBlock/ArticleImageBlock';
import ArticleTextBlock from '../ArticleTextBlock/ArticleTextBlock';
import s from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: TReducerList = {
  articleDetails: articleDetailsReducer,
};

const ArticleDetails: FC<ArticleDetailsProps> = ({ className, id }) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: TArticleBlock) => {
    switch (block.type) {
      case ArticleBlockTypeEnum.CODE:
        return <ArticleCodeBlock key={block.id} className={s.block} block={block} />;
      case ArticleBlockTypeEnum.IMAGE:
        return <ArticleImageBlock key={block.id} className={s.block} block={block} />;
      case ArticleBlockTypeEnum.TEXT:
        return <ArticleTextBlock key={block.id} className={s.block} block={block} />;
      default:
        return null;
    }
  }, []);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={s.avatar} width={200} height={200} border="50%" />
        <Skeleton className={s.title} width={300} height={32} />
        <Skeleton className={s.skeleton} width={600} height={24} />
        <Skeleton className={s.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <TextComponent text={t('An error occurred while loading the page')} />
    );
  } else {
    content = (
      <>
        <HStack justify="center" max className={s.avatarWrapper}>
          <Avatar
            size={200}
            src={article?.img}
            className={s.avatar}
          />
        </HStack>
        <VStack max gap="4">

          <TextComponent
            title={article?.title}
            text={article?.subtitle}
            size={TextSizeEnum.L}
          />
          <HStack className={s.articleInfo}>
            <AiFillEye />
            <TextComponent
              text={String(article?.views)}
            />
          </HStack>
          <HStack className={s.articleInfo}>
            <ImCalendar />
            <TextComponent
              text={article?.createdAt}
            />
          </HStack>
        </VStack>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack gap="16" max className={classNames(s.articleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetails);
