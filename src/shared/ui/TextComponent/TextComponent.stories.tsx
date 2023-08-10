import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';

import TextComponent, { TextSizeEnum, TextThemeEnum } from './TextComponent';

const meta = {
  title: 'shared/TextComponent',
  component: TextComponent,
  tags: ['autodocs'],
  args: {
    title: 'Title',
    text: 'Description text',
  },
} satisfies Meta<typeof TextComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title',
    text: '',
  },
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title',
    text: '',
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const OnlyText: Story = {
  args: {
    title: '',
    text: 'Description text',
  },
};

export const OnlyTextDark: Story = {
  args: {
    title: '',
    text: 'Description text',
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ErrorLight: Story = {
  args: {
    theme: TextThemeEnum.ERROR,
  },
};

export const ErrorDark: Story = {
  args: {
    theme: TextThemeEnum.ERROR,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const SizeS: Story = {
  args: {
    size: TextSizeEnum.S,
  },
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};

export const SizeM: Story = {
  args: {
    size: TextSizeEnum.M,
  },
};

export const SizeL: Story = {
  args: {
    size: TextSizeEnum.L,
  },
};

export const SizeXL: Story = {
  args: {
    size: TextSizeEnum.XL,
  },
};
