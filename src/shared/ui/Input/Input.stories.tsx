import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    value: 'Text',
    placeholder: 'Enter text',
  },
};

export const LightPasswordType: Story = {
  args: {
    value: 'Text',
    type: 'password',
    placeholder: 'Enter text',
  },
};

export const Dark: Story = {
  args: {
    value: 'Text',
    placeholder: 'Enter text',
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const DarkPasswordType: Story = {
  args: {
    value: 'Text',
    type: 'password',
    placeholder: 'Enter text',
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
