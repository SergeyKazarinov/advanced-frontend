import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('test with one param', () => {
    const params = getQueryParams({ test: 'value' });
    expect(params).toBe('?test=value');
  });
  test('test with two param', () => {
    const params = getQueryParams({ test: 'value', search: 'search' });
    expect(params).toBe('?test=value&search=search');
  });
  test('test with undefined', () => {
    const params = getQueryParams({ test: 'value', search: undefined });
    expect(params).toBe('?test=value');
  });
});
