/* eslint-disable max-len */
import { ARTICLE } from '@entities/Article';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook';
import { ThemeDecoratorWithFullHeight } from 'shared/config/storybook/ThemeDecoratorWithFullHeight';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta = {
  title: 'pages/ArticlesDetailsPage',
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
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.DARK),
  ],
};
