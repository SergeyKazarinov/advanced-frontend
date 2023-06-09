import { classNames } from './classNames';

describe('classNames', () => {
  test('only 1 argument', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('only 2 arg', () => {
    const expected = 'someClass twoClass';
    expect(classNames('someClass', { twoClass: true, threeClass: false })).toBe(expected);
  });

  test('all arguments', () => {
    const expected = 'someClass twoClass fourClass anotherClass';
    expect(
      classNames('someClass', { twoClass: true, threeClass: false }, ['fourClass', 'anotherClass']),
    ).toBe(expected);
  });

  test('with additional', () => {
    const expected = 'someClass fourClass anotherClass';

    expect(classNames('someClass', {}, ['fourClass', 'anotherClass'])).toBe(expected);
  });
});
