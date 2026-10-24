import styled from 'styled-components';
import { placeholderImage } from '../placeholder';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ $backgroundColor: string; $disabled: boolean; $width: string }>`
  display: block;
  width: 100%;
  max-width: ${(props) => props.$width};
  height: auto;
  border-radius: 8px;
  background-color: ${(props) => (props.$disabled ? '#cccccc' : props.$backgroundColor)};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  filter: ${(props) => (props.$disabled ? 'grayscale(100%)' : 'none')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
`;

export const Img = ({
  src = placeholderImage,
  alt = 'placeholder image',
  width = '400px',
  backgroundColor = '#ffffff',
  disabled = false,
}: ImgProps) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      $width={width}
      $backgroundColor={backgroundColor}
      $disabled={disabled}
    />
  );
};
