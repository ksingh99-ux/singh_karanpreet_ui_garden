import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTd = styled.td<{ $backgroundColor: string; $disabled: boolean }>`
  background-color: ${(props) => (props.$disabled ? '#cccccc' : props.$backgroundColor)};
  color: ${(props) => (props.$disabled ? '#666666' : '#222222')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  padding: 10px;
  border: 1px solid #dddddd;

  @media (max-width: 600px) {
    padding: 6px;
  }
`;

export const TableCell = ({
  text = 'Cell text',
  backgroundColor = '#ffffff',
  disabled = false,
}: TableCellProps) => {
  return (
    <StyledTd $backgroundColor={backgroundColor} $disabled={disabled}>
      {text}
    </StyledTd>
  );
};
