import styled from 'styled-components';
import { TableProps } from './Table.types';

const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table<{ $backgroundColor: string; $disabled: boolean }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => (props.$disabled ? '#cccccc' : props.$backgroundColor)};
  color: ${(props) => (props.$disabled ? '#666666' : '#222222')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Table = ({
  children,
  backgroundColor = '#ffffff',
  disabled = false,
}: TableProps) => {
  return (
    <Wrapper>
      <StyledTable $backgroundColor={backgroundColor} $disabled={disabled}>
        {children}
      </StyledTable>
    </Wrapper>
  );
};
