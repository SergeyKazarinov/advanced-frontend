import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import PageLoader from './PageLoader';

const meta = {
  title: 'widget/PageLoader',
  component: PageLoader,
  tags: ['autodocs'],
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
