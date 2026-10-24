import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { HeroImage } from './HeroImage';

test('HeroImage is visible', () => {
  render(<HeroImage title="Hero title" />);
  expect(screen.getByText('Hero title')).toBeVisible();
});

test('HeroImage background color changes when disabled', () => {
  const { rerender } = render(<HeroImage title="Hero title" />);
  expect(screen.getByTestId('hero-image')).toHaveStyleRule('background-color', '#1976d2');

  rerender(<HeroImage title="Hero title" disabled />);
  expect(screen.getByTestId('hero-image')).toHaveStyleRule('background-color', '#cccccc');
  expect(screen.getByTestId('hero-image')).toHaveStyleRule('cursor', 'not-allowed');
});
