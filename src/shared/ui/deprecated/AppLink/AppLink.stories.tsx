import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';

import AppLink, { AppLinkThemeEnum } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkThemeEnum.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkThemeEnum.SECONDARY,
  },
};

export const Red: Story = {
  args: {
    children: 'Text',
    theme: AppLinkThemeEnum.RED,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkThemeEnum.PRIMARY,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkThemeEnum.SECONDARY,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const RedDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkThemeEnum.RED,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
