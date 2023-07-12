import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import Button, { SizeButtonEnum, ThemeButtonEnum } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'text',
  },
};

export const Clear: Story = {
  args: {
    children: 'text',
    theme: ThemeButtonEnum.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'text',
    theme: ThemeButtonEnum.CLEAR_INVERTED,
  },
};

export const ClearDark: Story = {
  args: {
    children: 'text',
    theme: ThemeButtonEnum.CLEAR,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ClearInvertedDark: Story = {
  args: {
    children: 'text',
    theme: ThemeButtonEnum.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Outline: Story = {
  args: {
    children: 'text',
    theme: ThemeButtonEnum.OUTLINE,
  },
};

export const OutlineSizeM: Story = {
  args: {
    children: 'text',
    theme: ThemeButtonEnum.OUTLINE,
    size: SizeButtonEnum.M,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'text',
    theme: ThemeButtonEnum.OUTLINE,
    size: SizeButtonEnum.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'text',
    theme: ThemeButtonEnum.OUTLINE,
    size: SizeButtonEnum.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'text',
    theme: ThemeButtonEnum.OUTLINE,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const BackgroundTheme: Story = {
  args: {
    children: 'text',
    theme: ThemeButtonEnum.BACKGROUND,
  },
};

export const BackgroundInvertedTheme: Story = {
  args: {
    children: 'text',
    theme: ThemeButtonEnum.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ThemeButtonEnum.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: ThemeButtonEnum.BACKGROUND_INVERTED,
    square: true,
    size: SizeButtonEnum.M,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ThemeButtonEnum.BACKGROUND_INVERTED,
    square: true,
    size: SizeButtonEnum.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ThemeButtonEnum.BACKGROUND_INVERTED,
    square: true,
    size: SizeButtonEnum.XL,
  },
};

export const SquareSizeMDark: Story = {
  args: {
    children: '>',
    theme: ThemeButtonEnum.BACKGROUND_INVERTED,
    square: true,
    size: SizeButtonEnum.M,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const SquareSizeLDark: Story = {
  args: {
    children: '>',
    theme: ThemeButtonEnum.BACKGROUND_INVERTED,
    square: true,
    size: SizeButtonEnum.L,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const SquareSizeXLDark: Story = {
  args: {
    children: '>',
    theme: ThemeButtonEnum.BACKGROUND_INVERTED,
    square: true,
    size: SizeButtonEnum.XL,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Disabled: Story = {
  args: {
    children: 'text',
    theme: ThemeButtonEnum.CLEAR,
    disabled: true,
  },
};
