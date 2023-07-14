import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import Navbar from './Navbar';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightWithUser: Story = {
  args: {},
  decorators: [StoreDecorator({ user: { authData: { id: '1', username: '1234' } } })],
};

export const DarkWithUser: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({ user: { authData: { id: '1', username: '1234' } } }),
  ],
};

export const DarkWithPure: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
    StoreDecorator({ user: { authData: { id: '1', username: '1234' } } }),
  ],
};

export const LightWithoutUser: Story = {
  args: {},
  decorators: [StoreDecorator({ user: {} })],
};

export const DarkWithoutUser: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({ user: {} }),
  ],
};

export const PureWithoutUser: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
    StoreDecorator({ user: {} }),
  ],
};
