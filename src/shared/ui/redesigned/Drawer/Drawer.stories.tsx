import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator, ThemeDecoratorWithFullHeight } from '@shared/config/storybook';
import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';
import { ThemeEnum } from '@shared/const/theme';

import Drawer from './Drawer';

const meta = {
  title: 'shared/redesigned/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  decorators: [],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeprecatedLight: Story = {
  args: {
    isOpen: true,
    children: 'Deprecated Light Theme',
  },
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT)],
};

export const DeprecatedDark: Story = {
  args: {
    isOpen: true,
    children: 'Deprecated Dark Theme',
  },
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.DARK)],
};

export const DeprecatedPure: Story = {
  args: {
    isOpen: true,
    children: 'Deprecated Pure Theme',
  },
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.PURE)],
};

export const RedesignedLight: Story = {
  args: {
    isOpen: true,
    children: 'Redesigned Light Theme',
  },
  decorators: [ThemeDecorator(ThemeEnum.LIGHT), NewDesignDecorator],
};

export const RedesignedDark: Story = {
  args: {
    isOpen: true,
    children: 'Redesigned Dark Theme',
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK), NewDesignDecorator],
};

export const RedesignedOrange: Story = {
  args: {
    isOpen: true,
    children: 'Redesigned Pure Theme',
  },
  decorators: [ThemeDecorator(ThemeEnum.PURE), NewDesignDecorator],
};
