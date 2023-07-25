import avatar from '@shared/assets/tests/avatar.jpg';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import CommentItem from './CommentItem';

const meta = {
  title: 'entities/CommentItem',
  component: CommentItem,
  tags: ['autodocs'],
  args: {
    comment: {
      id: '1',
      text: 'Text comment',
      user: { id: '1', username: 'username', avatar },
    },
  },
} satisfies Meta<typeof CommentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Comment: Story = {
  args: {
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const CommentDark: Story = {
  args: {

  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const LoadingDark: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const CommentPure: Story = {
  args: {

  },
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};

export const LoadingPure: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};
