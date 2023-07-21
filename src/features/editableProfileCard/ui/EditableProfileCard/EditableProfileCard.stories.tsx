import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from '@app/providers/ThemeProvider';
import { StoreDecorator } from '@shared/config/storybook';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import avatar from '@shared/assets/tests/avatar.jpg';
import { ValidateProfileErrorEnum } from '../../model/types/editableProfileCardSchema';
import EditableProfileCard from './EditableProfileCard';

const profile = {
  age: 31,
  avatar,
  city: 'Perm',
  country: CountryEnum.Armenia,
  currency: CurrencyEnum.EUR,
  id: '1',
  lastName: 'LastName',
  name: 'FirstName',
  username: 'username',
};

const meta = {
  title: 'feature/EditableProfileCard',
  component: EditableProfileCard,
  tags: ['autodocs'],
  args: {
  },
  decorators: [
    ThemeDecorator(ThemeEnum.LIGHT),
    StoreDecorator({
      profile: {
        data: profile,
        form: profile,
        isLoading: false,
        readonly: true,
      },
    }),
  ],
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Pure: Story = {
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};

export const LoadingLight: Story = {
  decorators: [StoreDecorator({ profile: { isLoading: true } })],
};

export const LoadingDark: Story = {
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({ profile: { isLoading: true } }),
  ],
};

export const LoadingPure: Story = {
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
    StoreDecorator({ profile: { isLoading: true } }),
  ],
};

export const ErrorLight: Story = {
  decorators: [StoreDecorator({ profile: { error: 'Error' } })],
};

export const ErrorDark: Story = {
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({ profile: { error: 'Error' } }),
  ],
};

export const ErrorPure: Story = {
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
    StoreDecorator({ profile: { error: 'Error' } }),
  ],
};

export const ValidationErrorMessageLight: Story = {
  decorators: [StoreDecorator({
    profile: {
      validateError: [
        ValidateProfileErrorEnum.INCORRECT_AGE,
        ValidateProfileErrorEnum.INCORRECT_CITY,
        ValidateProfileErrorEnum.INCORRECT_COUNTRY,
        ValidateProfileErrorEnum.INCORRECT_USER_DATA,
        ValidateProfileErrorEnum.NO_DATA,
        ValidateProfileErrorEnum.SERVER_ERROR,
      ],
    },
  })],
};

export const ValidationErrorMessageDark: Story = {
  decorators: [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({
      profile: {
        validateError: [
          ValidateProfileErrorEnum.INCORRECT_AGE,
          ValidateProfileErrorEnum.INCORRECT_CITY,
          ValidateProfileErrorEnum.INCORRECT_COUNTRY,
          ValidateProfileErrorEnum.INCORRECT_USER_DATA,
          ValidateProfileErrorEnum.NO_DATA,
          ValidateProfileErrorEnum.SERVER_ERROR,
        ],
      },
    }),
  ],
};

export const ValidationErrorMessagePure: Story = {
  decorators: [
    ThemeDecorator(ThemeEnum.PURE),
    StoreDecorator({
      profile: {
        validateError: [
          ValidateProfileErrorEnum.INCORRECT_AGE,
          ValidateProfileErrorEnum.INCORRECT_CITY,
          ValidateProfileErrorEnum.INCORRECT_COUNTRY,
          ValidateProfileErrorEnum.INCORRECT_USER_DATA,
          ValidateProfileErrorEnum.NO_DATA,
          ValidateProfileErrorEnum.SERVER_ERROR,
        ],
      },
    }),
  ],
};
