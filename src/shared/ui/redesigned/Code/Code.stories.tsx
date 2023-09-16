import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@shared/config/storybook/NewDesignDecorator';

import Code from './Code';

const meta = {
  title: 'shared/redesigned/Code',
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
  decorators: [NewDesignDecorator],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
