import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from '@shared/const/theme';
import { ThemeDecorator } from '@shared/config/storybook';
import Flex from './Flex';

const meta = {
  title: 'shared/Stack/Flex',
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
  decorators: [
    ThemeDecorator(ThemeEnum.LIGHT),
  ],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
};

export const Dark: Story = {
  args: {
  },
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
  ],
};

export const Pure: Story = {
  args: {
  },
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
  ],
};
