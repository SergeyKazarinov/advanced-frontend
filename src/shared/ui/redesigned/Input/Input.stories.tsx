import { BiSearchAlt2 } from 'react-icons/bi';
import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';

import Input from './Input';

const meta = {
  title: 'shared/redesigned/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [NewDesignDecorator],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    value: 'Text',
    placeholder: 'Enter text',
    addonLeft: <BiSearchAlt2 />,
  },
};

export const InputWithAddonLeft: Story = {
  args: {
    value: '',
    placeholder: 'Enter text',
    addonLeft: <BiSearchAlt2 />,
  },
};
export const InputWithAddonRight: Story = {
  args: {
    value: '',
    placeholder: 'Enter text',
    addonRight: <BiSearchAlt2 />,
  },
};
