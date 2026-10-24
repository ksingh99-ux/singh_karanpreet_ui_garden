import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledTh = styled.th<{ $backgroundColor: string; $disabled: boolean }>`
  background-color: ${(props) => (props.$disabled ? '#cccccc' : props.$backgroundColor)};
  color: ${(props) => (props.$disabled ? '#666666' : '#ffffff')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  padding: 10px;
  text-align: left;
  border: 1px solid #dddddd;

  @media (max-width: 600px) {
    padding: 6px;
  }
`;

export const TableHeader = ({
  columns = ['Name', 'Age', 'City'],
  backgroundColor = '#1976d2',
  disabled = false,
}: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <StyledTh
            key={column}
            $backgroundColor={backgroundColor}
            $disabled={disabled}
          >
            {column}
          </StyledTh>
        ))}
      </tr>
    </thead>
  );
};
