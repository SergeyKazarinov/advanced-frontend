import { buildSelector } from '@shared/lib/store';

export const [useCounter, getCounter] = buildSelector((state) => state.counter);
