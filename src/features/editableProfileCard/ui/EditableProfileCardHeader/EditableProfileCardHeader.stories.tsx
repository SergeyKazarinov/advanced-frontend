import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { StoreDecorator } from '@shared/config/storybook';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';

import EditableProfileCardHeader from './EditableProfileCardHeader';

const profile = {
  age: 31,
  avatar: 'https://i.scdn.co/image/ab6761610000e5eb57c62faf97f45e233e74d77e',
  city: 'Perm',
  country: CountryEnum.Armenia,
  currency: CurrencyEnum.EUR,
  id: '1',
  lastName: 'LastName',
  name: 'FirstName',
  username: 'username',
};

const meta = {
  title: 'feature/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  tags: ['autodocs'],
  args: {},
  decorators: [
    ThemeDecorator(ThemeEnum.LIGHT),
    StoreDecorator({
      profile: {
        data: profile,
        form: profile,
        isLoading: false,
        readonly: false,
      },
    }),
  ],
} satisfies Meta<typeof EditableProfileCardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Pure: Story = {
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};

export const LightWithUserAuth: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        data: profile,
        form: profile,
        isLoading: false,
        readonly: true,
      },
      user: {
        authData: {
          id: '1',
          username: 'username',
        },
      },
    }),
  ],
};

export const DarkWithUserAuth: Story = {
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({
      profile: {
        data: profile,
        form: profile,
        isLoading: false,
        readonly: true,
      },
      user: {
        authData: {
          id: '1',
          username: 'username',
        },
      },
    }),
  ],
};

export const PureWithUserAuth: Story = {
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
    StoreDecorator({
      profile: {
        data: profile,
        form: profile,
        isLoading: false,
        readonly: true,
      },
      user: {
        authData: {
          id: '1',
          username: 'username',
        },
      },
    }),
  ],
};

export const LightWithEditUser: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        data: profile,
        form: profile,
        isLoading: false,
        readonly: false,
      },
      user: {
        authData: {
          id: '1',
          username: 'username',
        },
      },
    }),
  ],
};

export const DarkWithEditUser: Story = {
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({
      profile: {
        data: profile,
        form: profile,
        isLoading: false,
        readonly: false,
      },
      user: {
        authData: {
          id: '1',
          username: 'username',
        },
      },
    }),
  ],
};

export const PureWithEditUser: Story = {
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
    StoreDecorator({
      profile: {
        data: profile,
        form: profile,
        isLoading: false,
        readonly: false,
      },
      user: {
        authData: {
          id: '1',
          username: 'username',
        },
      },
    }),
  ],
};
