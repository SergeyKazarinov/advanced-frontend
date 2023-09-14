import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@shared/config/storybook';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from '@shared/const/theme';

import Sidebar from './Sidebar';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};

export const LightWithAuth: Story = {
  args: {},
  decorators: [
    StoreDecorator({ user: { authData: { id: '1', username: '123' } } }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({})],
};

export const DarkWithAuth: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({ user: { authData: { id: '1', username: '123' } } }),
  ],
};
