import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import s from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
}

const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({ className }) => {
  const { t } = useTranslation('article');
  return (
    <div className={classNames(s.articleCodeBlock, {}, [className])} />
  );
};

export default ArticleCodeBlock;
