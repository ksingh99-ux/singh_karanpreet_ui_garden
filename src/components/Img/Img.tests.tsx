import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Img } from './Img';

test('Img is visible', () => {
  render(<Img alt="test image" />);
  expect(screen.getByAltText('test image')).toBeVisible();
});

test('Img background color changes when disabled', () => {
  const { rerender } = render(<Img alt="test image" />);
  expect(screen.getByAltText('test image')).toHaveStyleRule('background-color', '#ffffff');

  rerender(<Img alt="test image" disabled />);
  expect(screen.getByAltText('test image')).toHaveStyleRule('background-color', '#cccccc');
  expect(screen.getByAltText('test image')).toHaveStyleRule('cursor', 'not-allowed');
});
