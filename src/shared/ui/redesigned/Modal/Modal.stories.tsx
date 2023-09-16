import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';
import { ThemeDecoratorWithFullHeight } from '@shared/config/storybook/ThemeDecoratorWithFullHeight';
import { ThemeEnum } from '@shared/const/theme';

import Modal from './Modal';

const meta = {
  title: 'shared/redesigned/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    isOpen: true,
    children: 'Text',
  },
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT)],
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Text',
  },
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.DARK)],
};

export const Pure: Story = {
  args: {
    isOpen: true,
    children: 'Text',
  },
  decorators: [ThemeDecoratorWithFullHeight(ThemeEnum.PURE)],
};

export const DarkRedesigned: Story = {
  args: {
    isOpen: true,
    children: 'Text',
  },
  decorators: [NewDesignDecorator, ThemeDecoratorWithFullHeight(ThemeEnum.DARK)],
};

export const OrangeRedesigned: Story = {
  args: {
    isOpen: true,
    children: 'Text',
  },
  decorators: [NewDesignDecorator, ThemeDecoratorWithFullHeight(ThemeEnum.PURE)],
};
