import { TableRow } from './TableRow';

export default {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    cells: { control: 'object' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
};

export const Default = {
  args: {
    cells: ['Karan', '22', 'Winnipeg'],
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    cells: ['Karan', '22', 'Winnipeg'],
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
