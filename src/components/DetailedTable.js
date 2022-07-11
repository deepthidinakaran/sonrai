import React, { useEffect, useState } from "react";
import { Table, Card } from "react-bootstrap";

const DetailedTable = (props) => {
  const [detailsTable, setDetailsTable] = useState([]);

  useEffect(() => {
    let tableData = [];
    const sankeyjson =
      props && props.sankeyData ? props.sankeyData.sonpai.value : {};
    sankeyjson.forEach((elm, index) => {
      tableData.push(
        <tr key={index}>
          <td>{elm.account}</td>
          <td>{elm.resourceSrn}</td>
          <td>{elm.type}</td>
          <td>{elm.permission}</td>
          <td>{elm.prediction}</td>
        </tr>
      );
    });
    setDetailsTable(tableData);
  }, []);

  return (
    <>
      <Card className="m-3 Table1">
        <h3 className="after">Detailed Table</h3>
        <Table className="table" striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th className="accwidth">Account</th>
              <th>ResourceSrn</th>
              <th>Type</th>
              <th>Permission List</th>
              <th>Prediction</th>
            </tr>
          </thead>
          <tbody>
            {detailsTable.length > 0 && detailsTable}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default DetailedTable;
