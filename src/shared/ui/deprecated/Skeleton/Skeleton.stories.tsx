import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@shared/config/storybook';
import { ThemeEnum } from '@shared/const/theme';

import Skeleton from './Skeleton';

const meta = {
  title: 'shared/deprecated/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
};
