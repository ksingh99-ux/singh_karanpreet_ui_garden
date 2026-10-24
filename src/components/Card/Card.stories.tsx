import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
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
    title: 'Card title',
    text: 'This is some card text.',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    title: 'Card title',
    text: 'This is some card text.',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
