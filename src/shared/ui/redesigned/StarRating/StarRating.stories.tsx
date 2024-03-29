import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';

import StarRating from './StarRating';

const meta = {
  title: 'shared/redesigned/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  args: {},
  decorators: [NewDesignDecorator],
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Redesigned: Story = {
  args: {},
  decorators: [],
};
