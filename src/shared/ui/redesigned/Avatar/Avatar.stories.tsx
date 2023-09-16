import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';

import Avatar from './Avatar';
import avatarImg from './avatar.jpg';

const meta = {
  title: 'shared/redesigned/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    size: 150,
    src: avatarImg,
    alt: 'avatar',
  },
  decorators: [NewDesignDecorator],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
