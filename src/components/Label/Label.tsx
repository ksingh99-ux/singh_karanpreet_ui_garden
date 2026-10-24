import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ $backgroundColor: string; $disabled: boolean }>`
  display: inline-block;
  background-color: ${(props) => (props.$disabled ? '#cccccc' : props.$backgroundColor)};
  color: ${(props) => (props.$disabled ? '#666666' : '#222222')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 16px;

  @media (max-width: 600px) {
    display: block;
    font-size: 14px;
  }
`;

export const Label = ({
  text = 'Label text',
  backgroundColor = '#e3f2fd',
  disabled = false,
  htmlFor,
}: LabelProps) => {
  return (
    <StyledLabel
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      htmlFor={htmlFor}
    >
      {text}
    </StyledLabel>
  );
};
