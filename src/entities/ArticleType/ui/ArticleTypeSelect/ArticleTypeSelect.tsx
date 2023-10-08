import { FC, memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleTypeEnum } from '@entities/Article';
import { Card } from '@shared/ui/redesigned/Card';
import { HStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';

import s from './ArticleTypeSelect.module.scss';

export type TArticleCreateType = Exclude<ArticleTypeEnum, ArticleTypeEnum.ALL>;
export type TArticleTypeItem = { value: TArticleCreateType; content: TArticleCreateType };

interface ArticleTypeSelectProps {
  className?: string;
  articleType?: TArticleCreateType[];
}

const ArticleTypeSelect: FC<ArticleTypeSelectProps> = ({ className, articleType = [] }) => {
  const [articleTypeSelected, setArticleTypeSelected] = useState<TArticleCreateType[]>(articleType);
  const { t } = useTranslation();
  const articleTypeList = useMemo<TArticleTypeItem[]>(
    () => [
      { value: ArticleTypeEnum.ECONOMICS, content: ArticleTypeEnum.ECONOMICS },
      { value: ArticleTypeEnum.IT, content: ArticleTypeEnum.IT },
      { value: ArticleTypeEnum.SCIENCE, content: ArticleTypeEnum.SCIENCE },
    ],
    [],
  );

  const handleChangeType = (articleType: TArticleCreateType) => () => {
    if (articleTypeSelected.includes(articleType)) {
      setArticleTypeSelected((prevState) => prevState.filter((item) => item !== articleType));
    } else {
      setArticleTypeSelected((prevState) => [...prevState, articleType]);
    }
  };

  return (
    <HStack className={className} max gap="16">
      <TextComponent text={t('Select article type')} />
      <HStack gap="24">
        {articleTypeList.map((articleType) => {
          const selected = articleTypeSelected.includes(articleType.value);
          return (
            <Card
              key={articleType.value}
              border="round"
              variant={selected ? 'light' : 'outline'}
              className={s.articleTypeTab}
              onClick={handleChangeType(articleType.value)}
            >
              {t(articleType.content)}
            </Card>
          );
        })}
      </HStack>
    </HStack>
  );
};

export default memo(ArticleTypeSelect);
