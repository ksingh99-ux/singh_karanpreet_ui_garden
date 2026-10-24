import { Img } from './Img';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    alt: 'placeholder image',
    width: '400px',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    alt: 'placeholder image',
    width: '400px',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
