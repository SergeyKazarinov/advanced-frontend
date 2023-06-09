import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecoratorWithFullHeight } from 'shared/config/storybook/ThemeDecoratorWithFullHeight';
import Loader from './Loader';

const meta = {
  title: 'shared/Loader',
  component: Loader,
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT)],
};

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.DARK)],
};
