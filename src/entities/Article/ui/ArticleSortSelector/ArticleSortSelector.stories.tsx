import { ArticleSortFieldEnum } from '@entities/Article/model/types/article';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecoratorWithFullHeight } from 'shared/config/storybook';
import ArticleSortSelector from './ArticleSortSelector';

const meta = {
  title: 'entities/article/ArticleSortSelector',
  component: ArticleSortSelector,
  tags: ['autodocs'],
  args: {
    sort: ArticleSortFieldEnum.TITLE,
    order: 'asc',
  },
  decorators: [
  ],
} satisfies Meta<typeof ArticleSortSelector>;

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

export const Purez: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.PURE),
  ],
};
