import { IStateSchema } from '@app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

type TActionCreator<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => IStateSchema;

  actionCreator: TActionCreator<Return, Arg, RejectedValue>;

  api: jest.Mocked<AxiosStatic>;

  navigate: jest.MockedFn<any>;

  constructor(
    actionCreator: TActionCreator<Return, Arg, RejectedValue>,
    state?: DeepPartial<IStateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as IStateSchema);
    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });

    return result;
  }
}
