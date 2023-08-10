import { ThemeDecorator } from '@shared/config/storybook';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleBlockTypeEnum } from '../../model/consts/consts';
import { IArticleTextBlock } from '../../model/types/article';
import { ARTICLE } from '../../utils/article';

import ArticleTextBlock from './ArticleTextBlock';

const meta = {
  title: 'entities/article/ArticleTextBlock',
  component: ArticleTextBlock,
  tags: ['autodocs'],
  args: {
    block: ARTICLE.blocks.find(
      (item) => item.type === ArticleBlockTypeEnum.TEXT,
    ) as IArticleTextBlock,
  },
  decorators: [],
} satisfies Meta<typeof ArticleTextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Pure: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};
