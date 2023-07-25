import { ARTICLE } from '@entities/Article';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from '@shared/const/theme';
import { StoreDecorator } from '@shared/config/storybook';
import { ThemeDecoratorWithFullHeight } from '@shared/config/storybook/ThemeDecoratorWithFullHeight';
import ArticleDetailsPageHeader from './ArticleDetailsPageHeader';

const meta = {
  title: 'pages/articles/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: ARTICLE,
      },
      user: {
        authData: {
          id: '1',
          username: 'username',
        },
      },
    }),
  ],
} satisfies Meta<typeof ArticleDetailsPageHeader>;

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

export const Pure: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.PURE),
  ],
};
