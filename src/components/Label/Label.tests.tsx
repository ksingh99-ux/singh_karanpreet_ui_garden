import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Label } from './Label';

test('Label is visible', () => {
  render(<Label text="My label" />);
  expect(screen.getByText('My label')).toBeVisible();
});

test('Label background color changes when disabled', () => {
  const { rerender } = render(<Label text="My label" />);
  expect(screen.getByText('My label')).toHaveStyleRule('background-color', '#e3f2fd');

  rerender(<Label text="My label" disabled />);
  expect(screen.getByText('My label')).toHaveStyleRule('background-color', '#cccccc');
  expect(screen.getByText('My label')).toHaveStyleRule('cursor', 'not-allowed');
});
