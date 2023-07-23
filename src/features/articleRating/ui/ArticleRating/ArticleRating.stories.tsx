import { ThemeEnum } from '@app/providers/ThemeProvider';
import { StoreDecorator, ThemeDecorator } from '@shared/config/storybook';
import type { Meta, StoryObj } from '@storybook/react';
import { IRating } from '@entities/Rating';
import ArticleRating from './ArticleRating';

const rating: IRating = {
  rate: 4,
  feedback: 'Хорошая статья',
};

const meta = {
  title: 'feature/ArticleRating',
  component: ArticleRating,
  tags: ['autodocs'],
  args: {
    articleId: '1',
  },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [],
      },
    ],
  },
  decorators: [
    ThemeDecorator(ThemeEnum.LIGHT),
    StoreDecorator({
      user: {
        authData: {
          id: '1',
        },
      },
    }),
  ],
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {

};

export const Dark: Story = {
  args: {
  },
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
  ],
};

export const Pure: Story = {
  args: {
  },
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
  ],
};

export const LightWithRating: Story = {
  args: {
    articleId: '1',
  },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [{ ...rating }],
      },
    ],
  },
};
