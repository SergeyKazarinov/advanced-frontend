import { ArticleViewEnum } from '@entities/Article';
import { ThemeDecorator } from '@shared/config/storybook';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';

import ArticleViewSelector from './ArticleViewSelector';

const meta = {
  title: 'feature/ArticleViewSelector',
  component: ArticleViewSelector,
  tags: ['autodocs'],
  args: {
    view: ArticleViewEnum.BIG,
  },
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Pure: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};
