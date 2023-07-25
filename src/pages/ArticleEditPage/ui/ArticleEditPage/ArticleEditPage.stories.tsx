import { StoreDecorator } from '@shared/config/storybook';
import { ThemeDecoratorWithFullHeight } from '@shared/config/storybook/ThemeDecoratorWithFullHeight';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';

const meta = {
  title: 'pages/articles/ArticleEditPage',
  component: ArticleEditPage,
  tags: ['autodocs'],
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT),
    StoreDecorator({}),
  ],
} satisfies Meta<typeof ArticleEditPage>;

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
