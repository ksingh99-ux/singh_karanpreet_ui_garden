import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Card } from './Card';

test('Card is visible', () => {
  render(<Card title="Card title" text="Card text" />);
  expect(screen.getByTestId('card')).toBeVisible();
});

test('Card background color changes when disabled', () => {
  const { rerender } = render(<Card title="Card title" text="Card text" />);
  expect(screen.getByTestId('card')).toHaveStyleRule('background-color', '#ffffff');

  rerender(<Card title="Card title" text="Card text" disabled />);
  expect(screen.getByTestId('card')).toHaveStyleRule('background-color', '#cccccc');
  expect(screen.getByTestId('card')).toHaveStyleRule('cursor', 'not-allowed');
});
