import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@shared/ui/redesigned/Card';
import { Input } from '@shared/ui/redesigned/Input';
import { VStack } from '@shared/ui/redesigned/Stack';
import { Textarea } from '@shared/ui/redesigned/TextArea';

interface ArticleCreateTextBlockProps {
  className?: string;
}

const ArticleCreateTextBlock: FC<ArticleCreateTextBlockProps> = ({ className }) => {
  const { t } = useTranslation('article');
  return (
    <Card variant="normal" padding="16" max className={className}>
      <VStack>
        <Input label={t('Add title')} />
        <Textarea label={t('Add text')} />
      </VStack>
    </Card>
  );
};

export default memo(ArticleCreateTextBlock);
