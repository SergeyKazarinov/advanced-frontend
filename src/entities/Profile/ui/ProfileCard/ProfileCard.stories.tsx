import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import avatar from '@shared/assets/tests/avatar.jpg';
import ProfileCard from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  args: {
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      name: 'Name',
      lastName: 'LastName',
      age: 22,
      city: 'Perm',
      country: CountryEnum.Russia,
      currency: CurrencyEnum.RUB,
      username: 'UserName',
      avatar,
    },
  },
};

export const Error: Story = {
  args: {
    error: 'true',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const PrimaryDark: Story = {
  args: {
    data: {
      name: 'Name',
      lastName: 'LastName',
      age: 22,
      city: 'Perm',
      country: CountryEnum.Russia,
      currency: CurrencyEnum.RUB,
      username: 'UserName',
      avatar,
    },
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ErrorDark: Story = {
  args: {
    error: 'true',
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const LoadingDark: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
