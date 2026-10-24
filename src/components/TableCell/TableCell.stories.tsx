import { TableCell } from './TableCell';

export default {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </table>
    ),
  ],
};

export const Default = {
  args: {
    text: 'Cell text',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: 'Cell text',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
