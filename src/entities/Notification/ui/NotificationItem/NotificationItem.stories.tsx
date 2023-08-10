import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';

import NotificationItem from './NotificationItem';

const meta = {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  tags: ['autodocs'],
  args: {
    notification: {
      id: '1',
      description: 'description',
      title: 'title',
    },
  },
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Pure: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};
