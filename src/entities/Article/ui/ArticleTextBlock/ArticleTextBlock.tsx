import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import s from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string;
}

const ArticleTextBlock: FC<ArticleTextBlockProps> = ({ className }) => {
  const { t } = useTranslation('article');
  return (
    <div className={classNames(s.articleTextBlock, {}, [className])} />
  );
};

export default ArticleTextBlock;
