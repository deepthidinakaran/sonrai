import Barchart from "../components/Navbar/barchart";
import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import DropdownComponent from "./Navbar/dropdown";

const OptimizationBarChart = (props) => {
  return (
    <>
      <Card className="m-3">
        <Barchart
          seriesData={props.seriesData}
          categoryData={props.categoryData}
          onBarClick={props.onBarClick}
        />
      </Card>
    </>
  );
};
export default OptimizationBarChart;
