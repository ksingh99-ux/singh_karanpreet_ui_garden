import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    text: 'This is some text',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: 'This is some text',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
