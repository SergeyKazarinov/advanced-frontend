import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@shared/config/storybook';
import { ThemeDecoratorWithFullHeight } from '@shared/config/storybook/ThemeDecoratorWithFullHeight';
import { ThemeEnum } from '@shared/const/theme';

import AboutPage from './AboutPage';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  tags: ['autodocs'],
  decorators: [StoreDecorator({ scroll: { scroll: {} } })],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.DARK)],
};
