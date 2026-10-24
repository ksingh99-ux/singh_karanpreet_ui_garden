import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableCell } from './TableCell';

test('TableCell is visible', () => {
  render(<table><tbody><tr><TableCell text="cell text" /></tr></tbody></table>);
  expect(screen.getByText('cell text')).toBeVisible();
});

test('TableCell background color changes when disabled', () => {
  const { rerender } = render(<table><tbody><tr><TableCell text="cell text" /></tr></tbody></table>);
  expect(screen.getByText('cell text')).toHaveStyleRule('background-color', '#ffffff');

  rerender(<table><tbody><tr><TableCell text="cell text" disabled /></tr></tbody></table>);
  expect(screen.getByText('cell text')).toHaveStyleRule('background-color', '#cccccc');
  expect(screen.getByText('cell text')).toHaveStyleRule('cursor', 'not-allowed');
});
