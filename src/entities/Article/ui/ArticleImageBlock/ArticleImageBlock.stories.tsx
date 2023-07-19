import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { ArticleBlockTypeEnum } from '../../model/consts/consts';
import { IArticleImageBlock } from '../../model/types/article';
import { ARTICLE } from '../../utils/article';
import ArticleImageBlock from './ArticleImageBlock';

const meta = {
  title: 'entities/article/ArticleImageBlock',
  component: ArticleImageBlock,
  tags: ['autodocs'],
  args: {
    block: ARTICLE.blocks.find((item) => item.type === ArticleBlockTypeEnum.IMAGE) as IArticleImageBlock,
  },
  decorators: [
  ],
} satisfies Meta<typeof ArticleImageBlock>;

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
