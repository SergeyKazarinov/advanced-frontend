import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Avatar from './Avatar';
import avatarImg from './avatar.jpg';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    size: 150,
    src: avatarImg,
    alt: 'avatar',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {

  },
};

export const PrimaryDark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
