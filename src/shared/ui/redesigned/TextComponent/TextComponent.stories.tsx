import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';

import TextComponent from './TextComponent';

const meta = {
  title: 'shared/redesigned/TextComponent',
  component: TextComponent,
  tags: ['autodocs'],
  args: {
    title: 'Title',
    text: 'Description text',
  },
  decorators: [NewDesignDecorator],
} satisfies Meta<typeof TextComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
