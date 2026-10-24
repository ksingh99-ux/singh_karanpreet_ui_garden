import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { RadioButton } from './RadioButton';

test('RadioButton is visible', () => {
  render(<RadioButton label="Option A" />);
  expect(screen.getByRole('radio')).toBeVisible();
});

test('RadioButton background color changes when disabled', () => {
  const { rerender } = render(<RadioButton label="Option A" />);
  expect(screen.getByText('Option A')).toHaveStyleRule('background-color', '#ffffff');

  rerender(<RadioButton label="Option A" disabled />);
  expect(screen.getByText('Option A')).toHaveStyleRule('background-color', '#cccccc');
  expect(screen.getByText('Option A')).toHaveStyleRule('cursor', 'not-allowed');
});
