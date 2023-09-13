import { FC, memo } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { ImCalendar } from 'react-icons/im';
import { useSelector } from 'react-redux';

import { Avatar } from '@shared/ui/deprecated/Avatar';
import { TextComponent, TextSizeEnum } from '@shared/ui/deprecated/TextComponent';
import { HStack, VStack } from '@shared/ui/redesigned/Stack';

import { getArticleDetailsData } from '../../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { renderBlock } from '../renderBlock';

import s from './ArticleDetailsDeprecated.module.scss';

const ArticleDetailsDeprecated: FC = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <HStack justify="center" max className={s.avatarWrapper}>
        <Avatar size={200} src={article?.img} className={s.avatar} />
      </HStack>
      <VStack max gap="4" data-testid="ArticleDetails.Info">
        <TextComponent title={article?.title} text={article?.subtitle} size={TextSizeEnum.L} />
        <HStack className={s.articleInfo}>
          <AiFillEye className={s.icon} />
          <TextComponent text={String(article?.views)} />
        </HStack>
        <HStack className={s.articleInfo}>
          <ImCalendar className={s.icon} />
          <TextComponent text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(renderBlock)}
    </>
  );
};

export default memo(ArticleDetailsDeprecated);
