import { TableHeader } from './TableHeader';

export default {
  title: 'Components/TableHeader',
  component: TableHeader,
  argTypes: {
    columns: { control: 'object' },
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
    columns: ['Name', 'Age', 'City'],
    backgroundColor: '#1976d2',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    columns: ['Name', 'Age', 'City'],
    backgroundColor: '#1976d2',
    disabled: true,
  },
};
