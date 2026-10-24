import { ChangeEvent } from 'react';

export interface RadioButtonProps {
  label?: string;
  name?: string;
  value?: string;
  backgroundColor?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
