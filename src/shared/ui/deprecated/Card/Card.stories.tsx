import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from '@shared/const/theme';

import { TextComponent } from '../TextComponent';

import Card, { CardThemeEnum } from './Card';

const meta = {
  title: 'shared/deprecated/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: <TextComponent title="Card Title" text="Card text" />,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Pure: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};

export const OutlineLight: Story = {
  args: {
    theme: CardThemeEnum.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    theme: CardThemeEnum.OUTLINE,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const OutlinePure: Story = {
  args: {
    theme: CardThemeEnum.OUTLINE,
  },
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};
