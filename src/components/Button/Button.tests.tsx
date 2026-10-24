import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from './Button';

test('Button is visible', () => {
  render(<Button label="Click me" />);
  expect(screen.getByText('Click me')).toBeVisible();
});

test('Button background color changes when disabled', () => {
  const { rerender } = render(<Button label="Click me" />);
  expect(screen.getByText('Click me')).toHaveStyleRule('background-color', '#1976d2');

  rerender(<Button label="Click me" disabled />);
  expect(screen.getByText('Click me')).toHaveStyleRule('background-color', '#cccccc');
  expect(screen.getByText('Click me')).toHaveStyleRule('cursor', 'not-allowed');
});
