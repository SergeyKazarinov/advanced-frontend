import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from '@shared/const/theme';
import { StoreDecorator } from '@shared/config/storybook';
import { ThemeDecoratorWithFullHeight } from '@shared/config/storybook/ThemeDecoratorWithFullHeight';
import avatar from '@shared/assets/tests/avatar.jpg';
import ArticleDetailsComments from './ArticleDetailsComments';

const meta = {
  title: 'pages/articles/ArticleDetailsComments',
  component: ArticleDetailsComments,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({
      articleDetailsPage: {
        comments: {
          ids: ['1'],
          entities: {
            1: {
              id: '1',
              text: 'some comment',
              user: {
                id: '1',
                username: 'username',
                avatar,
              },
            },
          },
        },
      },
    }),
  ],
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.LIGHT),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecoratorWithFullHeight(ThemeEnum.DARK),
  ],
};
