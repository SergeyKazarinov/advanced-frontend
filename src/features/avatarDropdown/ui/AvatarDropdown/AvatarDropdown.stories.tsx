import { UserRoleEnum } from '@entities/User';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecoratorWithFullHeight } from 'shared/config/storybook/ThemeDecoratorWithFullHeight';
import avatar from 'shared/assets/tests/avatar.jpg';
import AvatarDropdown from './AvatarDropdown';

const meta = {
  title: 'feature/AvatarDropdown',
  component: AvatarDropdown,
  tags: ['autodocs'],
  args: {
  },
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.PURE),
    StoreDecorator({
      user: {
        authData: {
          id: '1', username: '1234', avatar, roles: [UserRoleEnum.ADMIN, UserRoleEnum.MANAGER],
        },
      },
    }),
  ],
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightWithUser: Story = {
};

export const DarkWithUser: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.DARK),
  ],
};

export const PureWithUser: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.PURE),
  ],
};
