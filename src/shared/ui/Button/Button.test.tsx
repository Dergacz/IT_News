import { render, screen } from '@testing-library/react';
import { Button, ButtonVariant } from './Button';

describe('Button', () => {
  test('renders button', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('renders with theme class', () => {
    render(<Button variant={ButtonVariant.Clear}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
