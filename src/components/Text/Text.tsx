import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ $backgroundColor: string; $disabled: boolean }>`
  background-color: ${(props) => (props.$disabled ? '#cccccc' : props.$backgroundColor)};
  color: ${(props) => (props.$disabled ? '#666666' : '#222222')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  margin: 0;
  padding: 8px;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Text = ({
  text = 'This is some text',
  backgroundColor = '#ffffff',
  disabled = false,
}: TextProps) => {
  return (
    <StyledText $backgroundColor={backgroundColor} $disabled={disabled}>
      {text}
    </StyledText>
  );
};
