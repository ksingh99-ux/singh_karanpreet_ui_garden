import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Text } from './Text';

test('Text is visible', () => {
  render(<Text text="Some text" />);
  expect(screen.getByText('Some text')).toBeVisible();
});

test('Text background color changes when disabled', () => {
  const { rerender } = render(<Text text="Some text" />);
  expect(screen.getByText('Some text')).toHaveStyleRule('background-color', '#ffffff');

  rerender(<Text text="Some text" disabled />);
  expect(screen.getByText('Some text')).toHaveStyleRule('background-color', '#cccccc');
  expect(screen.getByText('Some text')).toHaveStyleRule('cursor', 'not-allowed');
});
