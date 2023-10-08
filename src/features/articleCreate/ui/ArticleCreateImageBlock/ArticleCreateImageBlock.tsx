import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@shared/ui/redesigned/Card';
import { Input } from '@shared/ui/redesigned/Input';
import { VStack } from '@shared/ui/redesigned/Stack';

interface ArticleCreateImageBlockProps {
  className?: string;
}

const ArticleCreateImageBlock: FC<ArticleCreateImageBlockProps> = ({ className }) => {
  const { t } = useTranslation('article');
  return (
    <Card variant="normal" padding="16" max className={className}>
      <VStack>
        <Input label={t('Add link')} />
        <Input label={t('Add description')} />
      </VStack>
    </Card>
  );
};

export default memo(ArticleCreateImageBlock);
