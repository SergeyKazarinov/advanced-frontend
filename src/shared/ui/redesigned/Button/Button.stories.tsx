import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    children: 'text',
    variant: 'clear',
  },
};

export const Outline: Story = {
  args: {
    children: 'text',
    variant: 'outline',
  },
};
