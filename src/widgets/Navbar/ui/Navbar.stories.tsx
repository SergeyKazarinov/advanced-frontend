import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import avatar from 'shared/assets/tests/avatar.jpg';
import Navbar from './Navbar';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  decorators: [
    ThemeDecorator(ThemeEnum.LIGHT),
    StoreDecorator({ user: { authData: { id: '1', username: '1234', avatar } } }),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightWithUser: Story = {
  args: {},

};

export const DarkWithUser: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
  ],
};

export const PureWithUser: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
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
