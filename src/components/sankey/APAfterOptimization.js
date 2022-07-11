import { Card } from "react-bootstrap";
import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";

HighchartsSankey(Highcharts);

const APAfterOptimization = (props) => {
  return (
    <Card className="m-3 p-2">
      <div className="detailed ">Account and Policies After Optimisation</div>
      <div className="d-flex flex-row justify-content-between subtitle">
        <span className="p-3">Account</span>
        <span className="p-3">PolicySrn</span>
        <span className="p-3">Prediction</span>
      </div>
      {props.isLoading ? (
        <>Loading</>
      ) : (
        <HighchartsReact highcharts={Highcharts} options={props.sanArray} />
      )}
    </Card>
  );
};
export default APAfterOptimization;
