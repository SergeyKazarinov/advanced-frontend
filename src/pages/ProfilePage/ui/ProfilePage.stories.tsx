import type { Meta, StoryObj } from '@storybook/react';

import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import avatar from '@shared/assets/tests/avatar.jpg';
import { StoreDecorator } from '@shared/config/storybook/StoreDecorator';
import { ThemeDecoratorWithFullHeight } from '@shared/config/storybook/ThemeDecoratorWithFullHeight';
import { ThemeEnum } from '@shared/const/theme';

import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = {
  profile: {
    form: {
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
export const Light: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT),
    StoreDecorator(data),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.DARK),
    StoreDecorator(data),
  ],
};

export const Pure: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.PURE),
    StoreDecorator(data),
  ],
};
