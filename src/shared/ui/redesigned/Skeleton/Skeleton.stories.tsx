import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';

import Skeleton from './Skeleton';

const meta = {
  title: 'shared/redesigned/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  decorators: [NewDesignDecorator],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};

export const Border20PX: Story = {
  args: {
    width: '70%',
    border: '20px',
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
