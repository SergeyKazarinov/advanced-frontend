import { StoreDecorator } from '@shared/config/storybook';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';

import { INotification } from '../../model/types/notification';

import NotificationList from './NotificationList';

const data: INotification = {
  id: '1',
  title: 'Title',
  description: 'Description',
};

const meta = {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [data, { ...data, id: '2' }, { ...data, id: '3' }],
      },
    ],
  },
} satisfies Meta<typeof NotificationList>;

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
