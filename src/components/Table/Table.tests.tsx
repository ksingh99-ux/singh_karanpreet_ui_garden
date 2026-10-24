import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Table } from './Table';

test('Table is visible', () => {
  render(<Table><tbody><tr><td>cell</td></tr></tbody></Table>);
  expect(screen.getByRole('table')).toBeVisible();
});

test('Table background color changes when disabled', () => {
  const { rerender } = render(<Table><tbody><tr><td>cell</td></tr></tbody></Table>);
  expect(screen.getByRole('table')).toHaveStyleRule('background-color', '#ffffff');

  rerender(<Table disabled><tbody><tr><td>cell</td></tr></tbody></Table>);
  expect(screen.getByRole('table')).toHaveStyleRule('background-color', '#cccccc');
  expect(screen.getByRole('table')).toHaveStyleRule('cursor', 'not-allowed');
});
