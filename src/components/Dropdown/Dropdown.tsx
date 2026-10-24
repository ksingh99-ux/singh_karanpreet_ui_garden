import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ $backgroundColor: string; $disabled: boolean }>`
  background-color: ${(props) => (props.$disabled ? '#cccccc' : props.$backgroundColor)};
  color: ${(props) => (props.$disabled ? '#666666' : '#222222')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #999999;
  border-radius: 4px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Dropdown = ({
  placeholder = 'Select an option',
  options = ['Option 1', 'Option 2', 'Option 3'],
  backgroundColor = '#ffffff',
  disabled = false,
  onChange,
}: DropdownProps) => {
  return (
    <StyledSelect
      defaultValue=""
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      disabled={disabled}
      onChange={onChange}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};
