import { Card, Table } from "react-bootstrap";

const AfterModel = (props) => {
  return (
    <Card className="m-3 ">
      <h3 className="after"></h3>
      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>Account</th>

            <th>Permissions</th>
            <th>ResourceSrn</th>
            <th>Policies Before Model</th>
            <th>Policies After Model</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.accountCount}</td>

            <td>{props.perCount}</td>
            <td>{props.srnCount}</td>
            <td>{props.policieCount}</td>
            <td>{3}</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};
export default AfterModel;
