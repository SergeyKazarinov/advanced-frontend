import { ArticleBlockTypeEnum, ArticleViewEnum, IArticleCodeBlock } from '@entities/Article/model/types/article';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { ARTICLE } from '../../utils/article';
import ArticleCodeBlock from './ArticleCodeBlock';

const meta = {
  title: 'entities/article/ArticleCodeBlock',
  component: ArticleCodeBlock,
  tags: ['autodocs'],
  args: {
    block: ARTICLE.blocks.find((item) => item.type === ArticleBlockTypeEnum.CODE) as IArticleCodeBlock,
  },
  decorators: [
  ],
} satisfies Meta<typeof ArticleCodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.LIGHT),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
  ],
};

export const Pure: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
  ],
};
