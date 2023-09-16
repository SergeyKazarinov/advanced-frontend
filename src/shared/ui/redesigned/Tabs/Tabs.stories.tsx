import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';

import Tabs from './Tabs';

const meta = {
  title: 'shared/redesigned/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    value: 'tab 2',
    tabs: [
      {
        value: 'tab 1',
        content: 'tab 1',
      },
      {
        value: 'tab 2',
        content: 'tab 2',
      },
      {
        value: 'tab 3',
        content: 'tab 3',
      },
    ],
  },
  decorators: [
    NewDesignDecorator,
    (Story: StoryFn) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
