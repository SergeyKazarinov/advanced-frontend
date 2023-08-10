import { ARTICLE } from '@entities/Article';
import { StoreDecorator } from '@shared/config/storybook';
import { ThemeDecoratorWithFullHeight } from '@shared/config/storybook/ThemeDecoratorWithFullHeight';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';

const meta = {
  title: 'pages/articles/ArticlesDetailsPage',
  component: ArticleDetailsPage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: ARTICLE,
      },
    }),
  ],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.DARK)],
};
