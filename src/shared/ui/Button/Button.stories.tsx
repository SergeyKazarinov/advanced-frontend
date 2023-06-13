import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import Button, { ThemeButtonEnum } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButtonEnum.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButtonEnum.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButtonEnum.OUTLINE,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
