import { Card, Table } from "react-bootstrap";

const BeforeModel = (props) => {
  return (
    <Card className="m-3">
      <h3 className="after">Before Model</h3>
      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>Account</th>
            <th>Policies</th>
            <th>Permissions</th>
            <th>Resource Srn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.accountCount}</td>
            <td>{props.policieCount}</td>
            <td>{props.perCount}</td>
            <td>{props.srnCount}</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};
export default BeforeModel;
