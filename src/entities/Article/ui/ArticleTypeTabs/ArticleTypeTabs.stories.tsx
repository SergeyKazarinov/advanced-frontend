import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybook';
import { ArticleTypeEnum } from '../../model/consts/consts';
import ArticleTypeTabs from './ArticleTypeTabs';

const meta = {
  title: 'entities/article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  tags: ['autodocs'],
  args: {
    value: ArticleTypeEnum.ALL,
  },
  decorators: [
    ThemeDecorator(ThemeEnum.LIGHT),
  ],
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [

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
