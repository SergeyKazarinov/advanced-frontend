import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Page from './Page';

const meta = {
  title: 'shared/Page',
  component: Page,
  tags: ['autodocs'],
  args: {
    children: 'Pages',
  },
} satisfies Meta<typeof Page>;

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
