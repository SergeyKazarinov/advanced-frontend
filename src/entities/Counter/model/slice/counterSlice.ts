import { buildSlice } from '@shared/lib/store';

import { ICounterSchema } from '../types/counterSchema';

const initialState: ICounterSchema = {
  value: 0,
};

const counterSlice = buildSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const counterActions = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

export const { useActions: useCounterActions } = counterSlice;
