import { HeroImage } from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    imageUrl: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    title: 'Welcome to the UI Garden',
    text: 'A small library of react components',
    backgroundColor: '#1976d2',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    title: 'Welcome to the UI Garden',
    text: 'A small library of react components',
    backgroundColor: '#1976d2',
    disabled: true,
  },
};
