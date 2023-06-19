import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecoratorWithFullHeight } from 'shared/config/storybook/ThemeDecoratorWithFullHeight';
import LoginFrom from './LoginForm';

const meta = {
  title: 'feature/LoginForm',
  component: LoginFrom,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginFrom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
  decorators: [
    StoreDecorator({ loginForm: { username: 'username', password: '12345' } }),
    ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT),
  ],
};

export const LightLoading: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    loginForm: { username: 'username', password: '12345', isLoading: true },
  }),
  ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT),
  ],
};

export const LightError: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    loginForm: {
      username: 'username',
      password: '12345',
      error: 'The username or password you entered is incorrect',
    },
  }),
  ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT),
  ],
};

export const Dark: Story = {
  args: {
  },
  decorators: [
    StoreDecorator({ loginForm: { username: 'username', password: '12345' } }),
    ThemeDecoratorWithFullHeight(ThemeEnum.DARK),
  ],
};

export const DarkError: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    loginForm: {
      username: 'username',
      password: '12345',
      error: 'The username or password you entered is incorrect',
    },
  }),
  ThemeDecoratorWithFullHeight(ThemeEnum.DARK),
  ],
};
