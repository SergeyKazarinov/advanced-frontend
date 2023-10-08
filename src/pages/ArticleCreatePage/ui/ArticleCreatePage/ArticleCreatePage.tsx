import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleBlockTypeEnum, ArticleTypeEnum } from '@entities/Article';
import { ArticleTypeSelect, TArticleCreateType } from '@entities/ArticleType';
import { ArticleCreateCodeBlock, ArticleCreateImageBlock, ArticleCreateTextBlock } from '@features/articleCreate';
import { StickyContentLayout } from '@shared/layouts/StickyContentLayout';
import { useDragAndDrop } from '@shared/lib/hooks/useDragAndDrop';
import { Card } from '@shared/ui/redesigned/Card';
import { Input } from '@shared/ui/redesigned/Input';
import { VStack } from '@shared/ui/redesigned/Stack';
import { TextComponent } from '@shared/ui/redesigned/TextComponent';
import { Page } from '@widgets/Page';

import ArticleCreateBlockButtonContainer, {
  IArticleCreateBlock,
} from '../ArticleCreateBlockButtonContainer/ArticleCreateBlockButtonContainer';

import s from './ArticleCreatePage.module.scss';

const ArticleCreatePage: FC = () => {
  const { t } = useTranslation('main');
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const [blockArray, setBlockArray] = useState<ArticleBlockTypeEnum[]>([]);

  const handleDrop = (item: IArticleCreateBlock) => {
    console.log(item);
  };
  const { dropTarget } = useDragAndDrop({ accept: 'articleCreate', dropCallback: handleDrop });
  const articleType: TArticleCreateType[] = [ArticleTypeEnum.ECONOMICS];

  const handleAddBlock = (articleCreateBlock: IArticleCreateBlock) => {
    setBlockArray((prevState) => [...prevState, articleCreateBlock.value]);
  };

  return (
    <Page>
      <TextComponent title={t('Create article')} align="center" />
      <StickyContentLayout
        content={
          <VStack gap="16" max>
            <Input label={t('Title Article')} />
            <Input label={t('Short description')} />
            <Input label={t('Image')} />
            <ArticleTypeSelect articleType={articleType} />
            <ArticleCreateTextBlock />
            <ArticleCreateTextBlock />
            <ArticleCreateTextBlock />
            <ArticleCreateImageBlock />
            <ArticleCreateCodeBlock />
            <div ref={dropTarget} className={s.articleBlockContainer}>
              <Card variant="outline">
                {blockArray.map((item) => (
                  <div>{item}</div>
                ))}
              </Card>
            </div>
          </VStack>
        }
        right={<ArticleCreateBlockButtonContainer onAddBlock={handleAddBlock} />}
      />
    </Page>
  );
};

export default memo(ArticleCreatePage);
