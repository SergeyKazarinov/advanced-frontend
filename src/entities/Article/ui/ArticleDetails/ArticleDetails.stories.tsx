import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from '@app/providers/ThemeProvider';
import { StoreDecorator, ThemeDecorator } from '@shared/config/storybook';
import { ARTICLE } from '../../utils/article';
import ArticleDetails from './ArticleDetails';

const meta = {
  title: 'entities/article/ArticlesDetails',
  component: ArticleDetails,
  tags: ['autodocs'],
  args: {
    id: '1',
  },
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: ARTICLE,
      },
    }),
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

export const Pure: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
  ],
};

export const LoadingLight: Story = {
  args: {
  },
  decorators: [
    ThemeDecorator(ThemeEnum.LIGHT),
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
};

export const LoadingDark: Story = {
  args: {
  },
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
};

export const LoadingPure: Story = {
  args: {
  },
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
};

export const ErrorDark: Story = {
  args: {
  },
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({
      articleDetails: {
        error: 'error',
      },
    }),
  ],
};
