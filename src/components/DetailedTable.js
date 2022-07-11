import React, { useEffect, useState } from "react";
import { Table, Card } from "react-bootstrap";
import sonpai from "../config/sonpai.json";

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
          {/* <td>{elm.policySrn}</td> */}
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
              {/* <th>PolicySrn</th> */}
              <th>ResourceSrn</th>
              <th>Type</th>
              <th>Permission List</th>
              <th>Prediction</th>
            </tr>
          </thead>
          <tbody>
            {detailsTable.length > 0 && detailsTable}
            {/* <td>{sankeyjsonpolicieCount}</td>
              <td>{props.data.srnCount}</td>
              <td>{props.data.perCount}</td>
              <td>{props.data.filterCount}</td>
              <td>{props.data.predictionCount}</td> */}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default DetailedTable;
