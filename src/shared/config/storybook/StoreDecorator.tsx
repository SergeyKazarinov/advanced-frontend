import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<IStateSchema>) => function (Story: StoryFn) {
  return (
    <StoreProvider initialState={state as IStateSchema}>
      <Story />
    </StoreProvider>
  );
};
