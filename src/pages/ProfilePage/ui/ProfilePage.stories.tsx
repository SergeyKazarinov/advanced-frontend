import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecoratorWithFullHeight } from 'shared/config/storybook/ThemeDecoratorWithFullHeight';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import avatar from 'shared/assets/tests/avatar.jpg';
import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {

  },
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT),
    StoreDecorator({
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
    }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.DARK),
    StoreDecorator({
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
    }),
  ],
};
