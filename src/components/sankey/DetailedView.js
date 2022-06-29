import {Card} from "react-bootstrap";
import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";

HighchartsSankey(Highcharts);

const DetailedView = (props) => {
    return <Card className="m-3 p-2">
    <div className="detailed">Detailed View</div>
    <div className="d-flex flex-row justify-content-between subtitle">
      <span className="p-3">Account</span>
      <span className="p-3">Resource Srn</span>
      <span className="p-3">Policy Srn</span>
      <span className="p-3">Effective Permission</span>
      <span className="p-3">Policy Entry Resource Filter</span>
      <span className="p-3">Prediction</span>
    </div>
    {props.isLoading ? (
      <>Loading</>
    ) : (
      <HighchartsReact highcharts={Highcharts} options={props.sanhighArray} />
    )}
  </Card>
};
export default DetailedView;
