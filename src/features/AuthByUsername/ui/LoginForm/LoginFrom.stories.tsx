import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
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
};

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
