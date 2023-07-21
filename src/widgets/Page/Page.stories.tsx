import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@shared/config/storybook';
import Page from './Page';

const meta = {
  title: 'widget/Page',
  component: Page,
  tags: ['autodocs'],
  args: {
    children: 'Pages',
  },
  decorators: [
    StoreDecorator({ scroll: { scroll: {} } }),
  ],
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
