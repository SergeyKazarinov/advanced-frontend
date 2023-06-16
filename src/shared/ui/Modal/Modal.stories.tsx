import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecoratorWithFullHeight } from 'shared/config/storybook/ThemeDecoratorWithFullHeight';
import Modal from './Modal';

const meta = {
  title: 'shared/Modal',
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
