import { Label } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    text: 'Label text',
    backgroundColor: '#e3f2fd',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: 'Label text',
    backgroundColor: '#e3f2fd',
    disabled: true,
  },
};
