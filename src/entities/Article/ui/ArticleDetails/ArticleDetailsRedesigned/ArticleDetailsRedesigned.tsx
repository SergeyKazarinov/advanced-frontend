import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { AppImage } from '@shared/ui/redesigned/AppImage';
import { Skeleton } from '@shared/ui/redesigned/Skeleton';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import { getArticleDetailsData } from '../../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { renderBlock } from '../renderBlock';

import s from './ArticleDetailsRedesigned.module.scss';

const ArticleDetailsRedesigned: FC = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <TextComponent title={article?.title} size="size_l" bold />
      <TextComponent text={article?.subtitle} />
      <AppImage
        fallback={<Skeleton width="100%" height={420} border="16px" />}
        src={article?.img}
        className={s.image}
      />
      {article?.blocks.map(renderBlock)}
    </>
  );
};

export default memo(ArticleDetailsRedesigned);
