import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableRow } from './TableRow';

test('TableRow is visible', () => {
  render(<table><tbody><TableRow cells={['one', 'two']} /></tbody></table>);
  expect(screen.getByRole('row')).toBeVisible();
});

test('TableRow background color changes when disabled', () => {
  const { rerender } = render(<table><tbody><TableRow cells={['one', 'two']} /></tbody></table>);
  expect(screen.getByRole('row')).toHaveStyleRule('background-color', '#ffffff');

  rerender(<table><tbody><TableRow cells={['one', 'two']} disabled /></tbody></table>);
  expect(screen.getByRole('row')).toHaveStyleRule('background-color', '#cccccc');
  expect(screen.getByRole('row')).toHaveStyleRule('cursor', 'not-allowed');
});
