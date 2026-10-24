import styled from 'styled-components';
import { TableCell } from '../TableCell';
import { TableRowProps } from './TableRow.types';

const StyledTr = styled.tr<{ $backgroundColor: string; $disabled: boolean }>`
  background-color: ${(props) => (props.$disabled ? '#cccccc' : props.$backgroundColor)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
`;

export const TableRow = ({
  cells = ['Karan', '22', 'Winnipeg'],
  backgroundColor = '#ffffff',
  disabled = false,
}: TableRowProps) => {
  return (
    <StyledTr $backgroundColor={backgroundColor} $disabled={disabled}>
      {cells.map((cell, index) => (
        <TableCell
          key={index}
          text={cell}
          backgroundColor={backgroundColor}
          disabled={disabled}
        />
      ))}
    </StyledTr>
  );
};
