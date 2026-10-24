import styled from 'styled-components';
import { placeholderImage } from '../placeholder';
import { HeroImageProps } from './HeroImage.types';

const StyledHero = styled.div<{ $backgroundColor: string; $disabled: boolean; $imageUrl: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  min-height: 300px;
  padding: 40px 20px;
  background-color: ${(props) => (props.$disabled ? '#cccccc' : props.$backgroundColor)};
  background-image: ${(props) => (props.$disabled ? 'none' : 'url("' + props.$imageUrl + '")')};
  background-size: cover;
  background-position: center;
  color: ${(props) => (props.$disabled ? '#666666' : '#ffffff')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};

  h2 {
    margin: 0 0 10px 0;
    font-size: 40px;
  }

  p {
    margin: 0;
    font-size: 20px;
  }

  @media (max-width: 600px) {
    min-height: 200px;

    h2 {
      font-size: 26px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const HeroImage = ({
  title = 'Welcome to the UI Garden',
  text = 'A small library of react components',
  imageUrl = placeholderImage,
  backgroundColor = '#1976d2',
  disabled = false,
}: HeroImageProps) => {
  return (
    <StyledHero
      data-testid="hero-image"
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      $imageUrl={imageUrl}
    >
      <h2>{title}</h2>
      <p>{text}</p>
    </StyledHero>
  );
};
