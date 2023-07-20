import { ARTICLE } from '@entities/Article';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import ArticleRecommendationsList from './ArticleRecommendationsList';

const meta = {
  title: 'feature/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  tags: ['autodocs'],
  args: {},

  decorators: [
    ThemeDecorator(ThemeEnum.LIGHT),
    StoreDecorator({}),
  ],
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [ARTICLE, { ...ARTICLE, id: '2' }, { ...ARTICLE, id: '3' }],
      },
    ],
  },
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