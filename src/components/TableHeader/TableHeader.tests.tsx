import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableHeader } from './TableHeader';

test('TableHeader is visible', () => {
  render(<table><TableHeader columns={['Name', 'Age']} /></table>);
  expect(screen.getByText('Name')).toBeVisible();
});

test('TableHeader background color changes when disabled', () => {
  const { rerender } = render(<table><TableHeader columns={['Name', 'Age']} /></table>);
  expect(screen.getByText('Name')).toHaveStyleRule('background-color', '#1976d2');

  rerender(<table><TableHeader columns={['Name', 'Age']} disabled /></table>);
  expect(screen.getByText('Name')).toHaveStyleRule('background-color', '#cccccc');
  expect(screen.getByText('Name')).toHaveStyleRule('cursor', 'not-allowed');
});
