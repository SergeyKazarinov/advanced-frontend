import avatar from '@shared/assets/tests/avatar.jpg';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import CommentList from './CommentList';

const meta = {
  title: 'entities/CommentList',
  component: CommentList,
  tags: ['autodocs'],
  args: {
    comments: [{
      id: '1',
      text: 'text comment',
      user: { id: '1', username: 'username', avatar },
    },
    {
      id: '1',
      text: 'text comment',
      user: { id: '1', username: 'username', avatar },
    }],
  },
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {

  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const PrimaryDark: Story = {
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
