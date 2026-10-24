import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label<{ $backgroundColor: string; $disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => (props.$disabled ? '#cccccc' : props.$backgroundColor)};
  color: ${(props) => (props.$disabled ? '#666666' : '#222222')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 16px;

  input {
    cursor: inherit;
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;

export const RadioButton = ({
  label = 'Option 1',
  name = 'radio-group',
  value = 'option1',
  backgroundColor = '#ffffff',
  disabled = false,
  defaultChecked = false,
  onChange,
}: RadioButtonProps) => {
  return (
    <StyledLabel $backgroundColor={backgroundColor} $disabled={disabled}>
      <input
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      {label}
    </StyledLabel>
  );
};
