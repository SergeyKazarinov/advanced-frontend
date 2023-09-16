import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';

import AppLink from './AppLink';

const meta = {
  title: 'shared/redesigned/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
  decorators: [NewDesignDecorator],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Link: Story = {
  args: {
    children: 'Text',
  },
};

export const ErrorLink: Story = {
  args: {
    children: 'Text',
    variant: 'red',
  },
};
