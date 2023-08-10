import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';

import CountrySelect from './CountrySelect';

const meta = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
