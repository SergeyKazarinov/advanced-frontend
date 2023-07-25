import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from '@shared/const/theme';
import { StoreDecorator } from '@shared/config/storybook';
import { ThemeDecoratorWithFullHeight } from '@shared/config/storybook/ThemeDecoratorWithFullHeight';
import { ArticleSortFieldEnum, ArticleViewEnum } from '@entities/Article';
import ArticlesPageFilter from './ArticlesPageFilter';

const meta = {
  title: 'pages/articles/ArticlesPageFilter',
  component: ArticlesPageFilter,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({
      articlesPage: {
        view: ArticleViewEnum.BIG,
        sort: ArticleSortFieldEnum.CREATED,
        order: 'asc',
        search: '',

      },
    }),
    ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT),
  ],
} satisfies Meta<typeof ArticlesPageFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.DARK),
  ],
};

export const Pure: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.PURE),
  ],
};
