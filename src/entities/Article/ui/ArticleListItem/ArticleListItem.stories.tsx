import { ThemeDecorator } from '@shared/config/storybook';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewEnum } from '../../model/consts/consts';
import { ARTICLE } from '../../utils/article';

import ArticleListItem from './ArticleListItem';

const meta = {
  title: 'entities/article/ArticleListItem',
  component: ArticleListItem,
  tags: ['autodocs'],
  args: {
    article: ARTICLE,
    view: ArticleViewEnum.SMALL,
  },
  decorators: [],
} satisfies Meta<typeof ArticleListItem>;

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
  },
  decorators: [ThemeDecorator(ThemeEnum.LIGHT)],
};

export const DarkBIG: Story = {
  args: {
    view: ArticleViewEnum.BIG,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const PureBIG: Story = {
  args: {
    view: ArticleViewEnum.BIG,
  },
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};
