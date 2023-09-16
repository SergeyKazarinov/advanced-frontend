import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';

import Flex from './Flex';

const meta = {
  title: 'shared/redesigned/Stack/Flex',
  component: Flex,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
        <div>fifth</div>
      </>
    ),
  },
  decorators: [NewDesignDecorator],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Redesigned: Story = {
  args: {},
};
