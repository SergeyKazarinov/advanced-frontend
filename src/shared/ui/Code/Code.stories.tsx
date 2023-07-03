import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEnum } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Code from './Code';

const meta = {
  title: 'shared/Code',
  component: Code,
  tags: ['autodocs'],
  args: {
    text: `
    import type { Meta, StoryObj } from '@storybook/react';
    import { ThemeEnum } from 'app/providers/ThemeProvider';
    import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
    import Code from './Code';
    
    const meta = {
      title: 'shared/Code',
      component: Code,
      tags: ['autodocs'],
      args: {
        children: 
        
      },
    } satisfies Meta<typeof Code>;
    
    export default meta;
    type Story = StoryObj<typeof meta>;`,

  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {

  },
};

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Pure: Story = {
  args: {
  },
  decorators: [ThemeDecorator(ThemeEnum.PURE)],
};
