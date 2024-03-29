import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@shared/lib/classNames';
import { ToggleFeatures, toggleFeatures } from '@shared/lib/features';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@shared/lib/hooks/useInitialEffect';
import { DynamicModuleLoader, TReducerList } from '@shared/lib/ui/DynamicModuleLoader';
import { Skeleton as SkeletonDeprecated } from '@shared/ui/deprecated/Skeleton';
import { TextComponent as TextComponentDeprecated } from '@shared/ui/deprecated/TextComponent';
import { Skeleton as SkeletonRedesigned } from '@shared/ui/redesigned/Skeleton';
import { VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import fetchArticleById from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

import ArticleDetailsDeprecated from './ArticleDetailsDeprecated/ArticleDetailsDeprecated';
import ArticleDetailsRedesigned from './ArticleDetailsRedesigned/ArticleDetailsRedesigned';

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
  const error = useSelector(getArticleDetailsError);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  let content;

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<TextComponent text={t('An error occurred while loading the page')} />}
        off={<TextComponentDeprecated text={t('An error occurred while loading the page')} />}
      />
    );
  } else {
    content = (
      <ToggleFeatures feature="isAppRedesigned" on={<ArticleDetailsRedesigned />} off={<ArticleDetailsDeprecated />} />
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
