import { Dropdown } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    placeholder: { control: 'text' },
    options: { control: 'object' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    placeholder: 'Select an option',
    options: ['Option 1', 'Option 2', 'Option 3'],
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    placeholder: 'Select an option',
    options: ['Option 1', 'Option 2', 'Option 3'],
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
