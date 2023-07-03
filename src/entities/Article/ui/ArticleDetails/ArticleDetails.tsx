import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { TextComponent } from 'shared/ui/TextComponent';
import { Skeleton } from 'shared/ui/Skeleton';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import {
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import fetchArticleById from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import s from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: TReducerList = {
  articleDetails: articleDetailsReducer,
};

const ArticleDetails: FC<ArticleDetailsProps> = ({ className, id }) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const data = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (!isLoading) {
    content = (
      <div>
        <Skeleton className={s.avatar} width={200} height={200} border="50%" />
        <Skeleton className={s.title} width={300} height={32} />
        <Skeleton className={s.skeleton} width={600} height={24} />
        <Skeleton className={s.skeleton} width="100%" height={200} />
      </div>
    );
  } else if (error) {
    content = (
      <TextComponent text={t('An error occurred while loading the page')} />
    );
  } else {
    content = (
      <div>{t('ArticleDetails')}</div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(s.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetails);
