import { ThemeDecorator } from '@shared/config/storybook';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import RatingCard from './RatingCard';

const meta = {
  title: 'entities/RatingCard',
  component: RatingCard,
  tags: ['autodocs'],
  args: {
    title: 'Поставьте оценку',
    feedbackTitle: 'Оставьте отзыв',
  },
} satisfies Meta<typeof RatingCard>;

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

export const LightWithFeedback: Story = {
  args: {
    hasFeedback: true,
  },
};

export const DarkWithFeedback: Story = {
  args: {
    hasFeedback: true,
  },
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
  ],
};

export const PureWithFeedback: Story = {
  args: {
    hasFeedback: true,
  },
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
  ],
};
