import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';

import avatarImg from '../Avatar/avatar.jpg';
import { Skeleton } from '../Skeleton';

import AppImage from './AppImage';

const meta = {
  title: 'shared/redesigned/AppImage',
  component: AppImage,
  tags: ['autodocs'],
  args: {
    src: avatarImg,
  },
  decorators: [NewDesignDecorator],
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {
    fallback: <Skeleton />,
  },
  loaders: [
    async () => ({
      todo: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
    }),
  ],
};
