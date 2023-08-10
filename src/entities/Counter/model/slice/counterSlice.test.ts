import { ICounterSchema } from '../types/counterSchema';

import { counterActions, counterReducer } from './counterSlice';

describe('counterReducer', () => {
  test('increment', () => {
    const state: ICounterSchema = { value: 10 };

    expect(counterReducer(state, counterActions.incremented())).toEqual({
      value: 11,
    });
  });

  test('decrement', () => {
    const state: ICounterSchema = { value: 10 };

    expect(counterReducer(state, counterActions.decremented())).toEqual({
      value: 9,
    });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.decremented())).toEqual({
      value: -1,
    });
  });
});
