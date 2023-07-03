import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import s from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string;
}

const ArticleImageBlock: FC<ArticleImageBlockProps> = ({ className }) => {
  const { t } = useTranslation('article');
  return (
    <div className={classNames(s.articleImageBlock, {}, [className])} />
  );
};

export default ArticleImageBlock;
