import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Button, { ThemeButtonEnum } from './Button';

describe('Button', () => {
  test('Test render', () => {
    // eslint-disable-next-line
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test has clear', () => {
    // eslint-disable-next-line
    render(<Button theme={ThemeButtonEnum.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
