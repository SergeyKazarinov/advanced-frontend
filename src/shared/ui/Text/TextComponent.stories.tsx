import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import TextComponent, { TextThemeEnum } from './TextComponent';

const meta = {
  title: 'shared/TextComponent',
  component: TextComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof TextComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    title: 'Title',
    text: 'Description text',
  },
};

export const Dark: Story = {
  args: {
    title: 'Title',
    text: 'Description text',
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title',
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const OnlyText: Story = {
  args: {
    text: 'Description text',
  },
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Description text',
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ErrorLight: Story = {
  args: {
    title: 'Title',
    text: 'Description text',
    theme: TextThemeEnum.ERROR,
  },
};

export const ErrorDark: Story = {
  args: {
    title: 'Title',
    text: 'Description text',
    theme: TextThemeEnum.ERROR,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
