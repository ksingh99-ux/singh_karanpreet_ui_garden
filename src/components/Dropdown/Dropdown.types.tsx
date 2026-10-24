import { ChangeEvent } from 'react';

export interface DropdownProps {
  placeholder?: string;
  options?: string[];
  backgroundColor?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}
