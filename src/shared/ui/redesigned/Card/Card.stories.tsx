import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';

import { TextComponent } from '../TextComponent';

import Card from './Card';

const meta = {
  title: 'shared/redesigned/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: <TextComponent title="Card Title" text="Card text" />,
  },
  decorators: [NewDesignDecorator],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
  },
};
