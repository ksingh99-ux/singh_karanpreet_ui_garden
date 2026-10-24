import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableFooter } from './TableFooter';

test('TableFooter is visible', () => {
  render(<table><TableFooter text="footer text" /></table>);
  expect(screen.getByText('footer text')).toBeVisible();
});

test('TableFooter background color changes when disabled', () => {
  const { rerender } = render(<table><TableFooter text="footer text" /></table>);
  expect(screen.getByText('footer text')).toHaveStyleRule('background-color', '#eeeeee');

  rerender(<table><TableFooter text="footer text" disabled /></table>);
  expect(screen.getByText('footer text')).toHaveStyleRule('background-color', '#cccccc');
  expect(screen.getByText('footer text')).toHaveStyleRule('cursor', 'not-allowed');
});
