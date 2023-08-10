import { ThemeDecorator } from '@shared/config/storybook';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewEnum } from '../../model/consts/consts';
import { ARTICLE } from '../../utils/article';

import ArticleList from './ArticleList';

const meta = {
  title: 'entities/article/ArticlesList',
  component: ArticleList,
  tags: ['autodocs'],
  args: {
    articles: new Array(9).fill(0).map((item) => ARTICLE),
  },
  decorators: [],
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightSMALL: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.LIGHT)],
};

export const DarkSMALL: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const PureSMALL: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};

export const LightBIG: Story = {
  args: {
    view: ArticleViewEnum.BIG,
    articles: new Array(3).fill(0).map((item) => ARTICLE),
  },
  decorators: [ThemeDecorator(ThemeEnum.LIGHT)],
};

export const DarkBIG: Story = {
  args: {
    view: ArticleViewEnum.BIG,
    articles: new Array(3).fill(0).map((item) => ARTICLE),
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const PureBIG: Story = {
  args: {
    view: ArticleViewEnum.BIG,
    articles: new Array(3).fill(0).map((item) => ARTICLE),
  },
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};

export const LightIsLoadingSMALL: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(ThemeEnum.LIGHT)],
};

export const DarkIsLoadingSMALL: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const PureIsLoadingSMALL: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};

export const LightIsLoadingBIG: Story = {
  args: {
    isLoading: true,
    view: ArticleViewEnum.BIG,
    articles: new Array(3).fill(0).map((item) => ARTICLE),
  },
  decorators: [ThemeDecorator(ThemeEnum.LIGHT)],
};

export const DarkIsLoadingBIG: Story = {
  args: {
    isLoading: true,
    view: ArticleViewEnum.BIG,
    articles: new Array(3).fill(0).map((item) => ARTICLE),
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const PureIsLoadingBIG: Story = {
  args: {
    isLoading: true,
    view: ArticleViewEnum.BIG,
    articles: new Array(3).fill(0).map((item) => ARTICLE),
  },
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};
