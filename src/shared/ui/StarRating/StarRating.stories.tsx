import { ThemeEnum } from '@shared/const/theme';
import { ThemeDecorator } from '@shared/config/storybook';
import type { Meta, StoryObj } from '@storybook/react';
import StarRating from './StarRating';

const meta = {
  title: 'shared/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.LIGHT),
  ],
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
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
