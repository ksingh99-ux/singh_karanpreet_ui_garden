import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTd = styled.td<{ $backgroundColor: string; $disabled: boolean }>`
  background-color: ${(props) => (props.$disabled ? '#cccccc' : props.$backgroundColor)};
  color: ${(props) => (props.$disabled ? '#666666' : '#222222')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  padding: 10px;
  font-weight: bold;
  border: 1px solid #dddddd;

  @media (max-width: 600px) {
    padding: 6px;
  }
`;

export const TableFooter = ({
  text = 'Table footer',
  colSpan = 3,
  backgroundColor = '#eeeeee',
  disabled = false,
}: TableFooterProps) => {
  return (
    <tfoot>
      <tr>
        <StyledTd
          colSpan={colSpan}
          $backgroundColor={backgroundColor}
          $disabled={disabled}
        >
          {text}
        </StyledTd>
      </tr>
    </tfoot>
  );
};
