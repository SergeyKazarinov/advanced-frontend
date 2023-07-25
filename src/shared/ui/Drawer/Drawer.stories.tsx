import { ThemeDecoratorWithFullHeight } from '@shared/config/storybook/ThemeDecoratorWithFullHeight';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import Drawer from './Drawer';

const meta = {
  title: 'shared/Drawer',
  component: Drawer,
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    isOpen: true,
    children: 'Text',
  },
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT)],
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Text',
  },
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.DARK)],
};

export const Pure: Story = {
  args: {
    isOpen: true,
    children: 'Text',
  },
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.PURE)],
};
