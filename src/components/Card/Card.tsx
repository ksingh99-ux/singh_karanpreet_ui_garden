import styled from 'styled-components';
import { placeholderImage } from '../placeholder';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ $backgroundColor: string; $disabled: boolean }>`
  box-sizing: border-box;
  width: 100%;
  max-width: 320px;
  overflow: hidden;
  border: 1px solid #dddddd;
  border-radius: 8px;
  background-color: ${(props) => (props.$disabled ? '#cccccc' : props.$backgroundColor)};
  color: ${(props) => (props.$disabled ? '#666666' : '#222222')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};

  img {
    display: block;
    width: 100%;
    opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
    filter: ${(props) => (props.$disabled ? 'grayscale(100%)' : 'none')};
  }

  .card-body {
    padding: 16px;
  }

  h3 {
    margin: 0 0 8px 0;
  }

  p {
    margin: 0;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const Card = ({
  title = 'Card title',
  text = 'This is some card text.',
  imageUrl = placeholderImage,
  backgroundColor = '#ffffff',
  disabled = false,
}: CardProps) => {
  return (
    <StyledCard
      data-testid="card"
      $backgroundColor={backgroundColor}
      $disabled={disabled}
    >
      <img src={imageUrl} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </StyledCard>
  );
};
