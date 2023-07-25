import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from '@shared/const/theme';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import NotificationButton from './NotificationButton';

const meta = {
  title: 'feature/NotificationButton',
  component: NotificationButton,
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
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
