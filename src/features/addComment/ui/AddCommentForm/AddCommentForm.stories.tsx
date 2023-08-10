import { ThemeDecorator } from '@shared/config/storybook';
import { StoreDecorator } from '@shared/config/storybook/StoreDecorator';
import { ThemeEnum } from '@shared/const/theme';
import type { Meta, StoryObj } from '@storybook/react';

import AddCommentForm from './AddCommentForm';

const meta = {
  title: 'feature/AddCommentForm',
  component: AddCommentForm,
  tags: ['autodocs'],
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({ addCommentForm: { text: 'Comment 1' } }),
    ThemeDecorator(ThemeEnum.LIGHT),
  ],
};

export const LightError: Story = {
  args: {},
  decorators: [
    StoreDecorator({ addCommentForm: { error: 'Error' } }),
    ThemeDecorator(ThemeEnum.LIGHT),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    StoreDecorator({ addCommentForm: { text: 'Comment 1' } }),
    ThemeDecorator(ThemeEnum.DARK),
  ],
};

export const DarkError: Story = {
  args: {},
  decorators: [
    StoreDecorator({ addCommentForm: { error: 'Error' } }),
    ThemeDecorator(ThemeEnum.DARK),
  ],
};

export const Pure: Story = {
  args: {},
  decorators: [
    StoreDecorator({ addCommentForm: { text: 'Comment 1' } }),
    ThemeDecorator(ThemeEnum.PURE),
  ],
};

export const PureError: Story = {
  args: {},
  decorators: [
    StoreDecorator({ addCommentForm: { error: 'Error' } }),
    ThemeDecorator(ThemeEnum.PURE),
  ],
};
