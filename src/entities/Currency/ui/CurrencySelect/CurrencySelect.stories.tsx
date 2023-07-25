import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';
import CurrencySelect from './CurrencySelect';

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  tags: ['autodocs'],
  args: {
  },
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {

  },
};

export const PrimaryDark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
