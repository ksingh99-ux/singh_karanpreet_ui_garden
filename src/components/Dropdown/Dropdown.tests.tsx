import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Dropdown } from './Dropdown';

test('Dropdown is visible', () => {
  render(<Dropdown placeholder="Pick one" />);
  expect(screen.getByRole('combobox')).toBeVisible();
});

test('Dropdown background color changes when disabled', () => {
  const { rerender } = render(<Dropdown placeholder="Pick one" />);
  expect(screen.getByRole('combobox')).toHaveStyleRule('background-color', '#ffffff');

  rerender(<Dropdown placeholder="Pick one" disabled />);
  expect(screen.getByRole('combobox')).toHaveStyleRule('background-color', '#cccccc');
  expect(screen.getByRole('combobox')).toHaveStyleRule('cursor', 'not-allowed');
});
