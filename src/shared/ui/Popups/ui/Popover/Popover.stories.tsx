import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from '@app/providers/ThemeProvider';
import { ThemeDecoratorWithFullHeight } from '@shared/config/storybook';
import Popover from './Popover';

const meta = {
  title: 'shared/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: {
    children: (<div>asdf</div>),
    trigger: (<div>Triger</div>),
  },
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT),
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
};

export const Dark: Story = {
  args: {
  },
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.DARK),
  ],
};

export const Pure: Story = {
  args: {
  },
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.PURE),
  ],
};
