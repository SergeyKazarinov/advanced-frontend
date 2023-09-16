import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator, ThemeDecoratorWithFullHeight } from '@shared/config/storybook';
import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';
import { ThemeEnum } from '@shared/const/theme';

import { Button } from '../../../Button';

import Dropdown from './Dropdown';

const meta = {
  title: 'shared/redesigned/DropDown',
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
  decorators: [NewDesignDecorator, ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT)],
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
