import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook';
import { ThemeDecoratorWithFullHeight } from 'shared/config/storybook/ThemeDecoratorWithFullHeight';
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