import { TableFooter } from './TableFooter';

export default {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <table>
        <Story />
      </table>
    ),
  ],
};

export const Default = {
  args: {
    text: 'Table footer',
    backgroundColor: '#eeeeee',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: 'Table footer',
    backgroundColor: '#eeeeee',
    disabled: true,
  },
};
