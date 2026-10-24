import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ $backgroundColor: string; $disabled: boolean }>`
  background-color: ${(props) => (props.$disabled ? '#cccccc' : props.$backgroundColor)};
  color: ${(props) => (props.$disabled ? '#666666' : '#ffffff')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 16px;

  @media (max-width: 600px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const Button = ({
  label = 'Click me',
  backgroundColor = '#1976d2',
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};
