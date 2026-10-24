import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    label: 'Click me',
    backgroundColor: '#1976d2',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Click me',
    backgroundColor: '#1976d2',
    disabled: true,
  },
};
