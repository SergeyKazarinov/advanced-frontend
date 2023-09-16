import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';

import AppLogo from './AppLogo';

const meta = {
  title: 'shared/redesigned/AppLogo',
  component: AppLogo,
  tags: ['autodocs'],
  args: {
    size: 100,
  },
  decorators: [NewDesignDecorator],
} satisfies Meta<typeof AppLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
