import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from '@shared/const/theme';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import LangSwitcher from './LangSwitcher';

const meta = {
  title: 'feature/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dar: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
  ],
};
