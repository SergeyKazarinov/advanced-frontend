import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import ArticleDetails from './ArticleDetails';

const meta = {
  title: 'enteties/ArticlesDetails',
  component: ArticleDetails,
  tags: ['autodocs'],
  args: {
    id: '1',
  },
  decorators: [
    StoreDecorator({ articleDetails: { isLoading: true } }),
  ],
} satisfies Meta<typeof ArticleDetails>;

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
