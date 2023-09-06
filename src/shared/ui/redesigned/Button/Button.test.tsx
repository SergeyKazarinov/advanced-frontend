import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  test('Test render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test has outline', () => {
    render(<Button variant="outline">Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('outline');
  });
});
