import { Table } from './Table';
import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';
import { TableFooter } from '../TableFooter';

// builds a full table so the story shows header, rows and footer together
const renderTable = (args) => (
  <Table backgroundColor={args.backgroundColor} disabled={args.disabled}>
    <TableHeader disabled={args.disabled} />
    <tbody>
      <TableRow
        cells={['Karan', '22', 'Winnipeg']}
        backgroundColor={args.backgroundColor}
        disabled={args.disabled}
      />
      <TableRow
        cells={['Sam', '25', 'Toronto']}
        backgroundColor={args.backgroundColor}
        disabled={args.disabled}
      />
    </tbody>
    <TableFooter text="2 people" disabled={args.disabled} />
  </Table>
);

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    backgroundColor: '#ffffff',
    disabled: false,
  },
  render: renderTable,
};

export const Disabled = {
  args: {
    backgroundColor: '#ffffff',
    disabled: true,
  },
  render: renderTable,
};
