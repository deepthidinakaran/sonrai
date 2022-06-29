import { Card } from "react-bootstrap";
import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";

HighchartsSankey(Highcharts);

const APBeforeOptimization = (props) => {
  return (
    <Card className="m-3 p-2">
      <div className="detailed ">Account and Policies Before Optimisation</div>
      <div className="d-flex flex-row justify-content-between subtitle">
        <span className="p-3">Account</span>
        <span className="p-3">Policy Srn</span>
      </div>
      <div></div>
      {props.isLoading ? (
        <>Loading</>
      ) : (
        <HighchartsReact highcharts={Highcharts} options={props.tempArray} />
      )}
    </Card>
  );
};
export default APBeforeOptimization;
