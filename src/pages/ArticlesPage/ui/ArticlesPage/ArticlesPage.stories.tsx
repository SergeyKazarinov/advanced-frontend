import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecoratorWithFullHeight } from 'shared/config/storybook/ThemeDecoratorWithFullHeight';
import { StoreDecorator } from 'shared/config/storybook';
import { ARTICLE, ArticleViewEnum } from '@entities/Article';
import ArticlesPage from './ArticlesPage';

const meta = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({
      articlesPage: {
        ids: ['1', '2', '3', '4', '5', '6'],
        entities: {
          1: ARTICLE,
          2: ARTICLE,
          3: ARTICLE,
          4: ARTICLE,
          5: ARTICLE,
          6: ARTICLE,
        },
      },
    }),
  ],
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
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

export const LightViewBIG: Story = {
  args: {
  },
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT),
    StoreDecorator({
      articlesPage: {
        ids: ['1', '2'],
        entities: {
          1: ARTICLE,
          2: ARTICLE,
        },
        view: ArticleViewEnum.BIG,
      },
    }),
  ],
};

export const DarkViewBIG: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.DARK),
    StoreDecorator({
      articlesPage: {
        ids: ['1', '2'],
        entities: {
          1: ARTICLE,
          2: ARTICLE,
        },
        view: ArticleViewEnum.BIG,
      },
    }),
  ],
};

export const PureViewBIG: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.PURE),
    StoreDecorator({
      articlesPage: {
        ids: ['1', '2'],
        entities: {
          1: ARTICLE,
          2: ARTICLE,
        },
        view: ArticleViewEnum.BIG,
      },
    }),
  ],
};
