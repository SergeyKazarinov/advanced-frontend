import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Card from './Card';
import { TextComponent } from '../TextComponent';

const meta = {
  title: 'shared/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: <TextComponent title="Card Title" text="Card text" />,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
};

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Pure: Story = {
  args: {
  },
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};
