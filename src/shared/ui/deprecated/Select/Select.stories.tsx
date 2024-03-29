import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from '@shared/const/theme';

import Select from './Select';

const meta = {
  title: 'shared/deprecated/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    options: [
      { value: '123', content: 'Первый элемент' },
      { value: '234', content: 'Второй элемент' },
    ],
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryWithLabel: Story = {
  args: {
    label: 'label',
  },
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
