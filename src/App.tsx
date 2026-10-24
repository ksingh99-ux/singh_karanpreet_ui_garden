import styled from 'styled-components';
import {
  Button,
  Label,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableFooter,
  Dropdown,
  RadioButton,
  Img,
  HeroImage,
  Card,
} from './components';

const Page = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;

  section {
    margin-bottom: 32px;
  }

   section > h2 {
    border-bottom: 2px solid #1976d2;
    padding-bottom: 4px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }
`;

function App() {
  return (
    <Page>
      <h1>singh_karanpreet UI Garden</h1>
      <p>
        a small component library built with react, typescript, styled-components and storybook.
        each component is shown in its default state and its disabled state.
      </p>

      <section>
        <h2>Hero Image</h2>
        <HeroImage />
        <br />
        <HeroImage disabled />
      </section>

      <section>
        <h2>Button</h2>
        <div className="row">
          <Button />
          <Button disabled />
        </div>
      </section>

      <section>
        <h2>Label</h2>
        <div className="row">
          <Label />
          <Label disabled />
        </div>
      </section>

      <section>
        <h2>Text</h2>
        <Text />
        <br />
        <Text disabled />
      </section>

      <section>
        <h2>Table (with header, rows, cells and footer)</h2>
        <Table>
          <TableHeader />
          <tbody>
            <TableRow cells={['Karan', '22', 'Winnipeg']} />
            <TableRow cells={['Sam', '25', 'Toronto']} />
          </tbody>
          <TableFooter text="2 people" />
        </Table>
        <br />
        <Table disabled>
          <TableHeader disabled />
          <tbody>
            <TableRow cells={['Karan', '22', 'Winnipeg']} disabled />
            <TableRow cells={['Sam', '25', 'Toronto']} disabled />
          </tbody>
          <TableFooter text="2 people" disabled />
        </Table>
      </section>

      <section>
        <h2>Dropdown</h2>
        <div className="row">
          <Dropdown />
          <Dropdown disabled />
        </div>
      </section>

      <section>
        <h2>Radio Button</h2>
        <div className="row">
          <RadioButton label="Option 1" name="demo" value="1" defaultChecked />
          <RadioButton label="Option 2" name="demo" value="2" />
          <RadioButton label="Disabled option" name="demo" value="3" disabled />
        </div>
      </section>

      <section>
        <h2>Img</h2>
        <div className="row">
          <Img width="250px" />
          <Img width="250px" disabled />
        </div>
      </section>

      <section>
        <h2>Card</h2>
        <div className="row">
          <Card />
          <Card disabled />
        </div>
      </section>
    </Page>
  );
}

export default App;
