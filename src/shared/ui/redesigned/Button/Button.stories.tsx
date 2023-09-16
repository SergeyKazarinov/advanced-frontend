import { BiSearchAlt2 } from 'react-icons/bi';
import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';

import Button from './Button';

const meta = {
  title: 'shared/redesigned/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [NewDesignDecorator],
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
  },
};

export const OutlineError: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    color: 'error',
  },
};

export const ButtonWithAddonLeft: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    addonLeft: <BiSearchAlt2 />,
  },
};

export const ButtonWithAddonRight: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    addonRight: <BiSearchAlt2 />,
  },
};

export const ButtonWithAddons: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    addonRight: <BiSearchAlt2 />,
    addonLeft: <BiSearchAlt2 />,
  },
};
