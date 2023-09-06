import { ThemeDecorator } from '@shared/config/storybook';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../Button';

import Dropdown from './Dropdown';

const meta = {
  title: 'shared/DropDown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'first',
      },
      {
        content: 'first',
      },
    ],
  },
  decorators: [ThemeDecorator(ThemeEnum.LIGHT)],
} satisfies Meta<typeof Dropdown>;

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
