import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

import Button, { ThemeButtonEnum } from './Button';

describe('Button', () => {
  test('Test render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test has clear', () => {
    render(<Button theme={ThemeButtonEnum.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
