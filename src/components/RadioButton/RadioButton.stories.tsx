import { RadioButton } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    label: 'Option 1',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Option 1',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
