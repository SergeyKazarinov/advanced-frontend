import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from '@shared/const/theme';
import { ThemeDecoratorWithFullHeight } from '@shared/config/storybook';
import ListBox from './ListBox';

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  args: {
    defaultValue: 'Выберите значение',
    items: [
      {
        value: '1 Значение',
        content: (<div>1 значение</div>),
      },
      {
        value: '2 Значение',
        content: (<div>2 значение</div>),
      },
      {
        value: '3 Значение',
        content: (<div>3 значение</div>),
        disabled: true,
      },
      {
        value: '4 Значение',
        content: (<div>4 значение</div>),
      },
    ],
  },
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT),
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} satisfies Meta<typeof ListBox>;

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
