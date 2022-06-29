import React, { useEffect, useState } from "react";
import SNavbar from "./components/Navbar/SNavbar";
import DetailedTable from "./components/DetailedTable";
import OptimizationBarChart from "./components/OptimizationBarChart";
import DetailedCards from "./components/DetailedCards";
import "./App.css";
import { Row, Col, Card, Table, Dropdown } from "react-bootstrap";
import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";
import sankey from "./config/sankey.json";
import sonpai from "./config/sonpai.json";
import Footer from "./components/footer";
import Barchart from "./components/Navbar/barchart";
import DateTime from "./components/Date";
// import Scatterplot from "./components/ScatterPlot";
import AfterModel from "./components/AfterModel";
import BeforeModel from "./components/BeforeModel";
import APAfterOptimization from "./components/sankey/APAfterOptimization";
import APBeforeOptimization from "./components/sankey/APBeforeOptimization";
import DetailedView from "./components/sankey/DetailedView";
import scatter from "./config/scatter.json";
import DropdownComponent from "./components/Navbar/dropdown";
// import { experimental_sx } from "@mui/material";

function App() {
  const [tempArray, setTempArray] = useState({});
  const [barArray, setbarArray] = useState({});
  const [sanArray, setsanArray] = useState({});
  const [sanhighArray, setsanhighArray] = useState({});
  const [accountCount, setaccountCount] = useState(6);
  const [perCount, setperCount] = useState(3296);
  const [policieCount, setpolicieCount] = useState(1825);
  const [srnCount, setsrnCount] = useState(285);
  const [filterCount, setfilterCount] = useState(0);
  const [predictionCount, setpredictionCount] = useState(248);
  const [laneCount, setlaneCount] = useState(0);
  const [namecount, setnamecount] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [scatterdata, setscatterdata] = useState([]);
  const [scatterdata2, setscatterdata2] = useState([]);
  const [barAccountCount, setbarAccountCount] = useState(0);

  useEffect(() => {
    //INITIAL SANKEY OPTIONS
    let sankeyOptions = {
      credits: {
        enabled: false,
      },
      title: {
        text: "",
        style: {
          //color:  "black",
          fontSize: "16px",
          fontFamily: "Arial",
          fontWeight: "bold",
          textAlign: "left",
          margin: "0",
        },
        align: "left",
      },
      boostThreshold: 1,
      series: [
        {
          keys: ["from", "to", "weight"],
          data: [],
          type: "sankey",
          name: "",
        },
      ],
      dataLabels: {
        enabled: true,
      },
    };

    //DUPLICATING FOR EACH SANKEY CHART
    let temp = JSON.parse(JSON.stringify(sankeyOptions));
    let sanhigh = JSON.parse(JSON.stringify(sankeyOptions));
    let sanhighArray = JSON.parse(JSON.stringify(sankeyOptions));

    //BEFORE OPTIMIZATION SANKEY
    let distinctPolicies = [
      ...new Map(sankey.data.map((item) => [item["policySrn"], item])).values(),
    ];
    distinctPolicies.forEach((element) =>
      temp.series[0].data.push([
        element.effectivePermissionAccount,
        element.policySrn,
        1,
      ])
    );
    setTempArray(temp);

    // let set1 = [];
    // let set2 = [];
    // let set3 = [];
    // let set4 = [];
    // let set5 = [];
    // let set6 = [];
    // let set7 = [];
    // let set8 = [];

    sankey.data.forEach((element) => {
      //AFTER OPTIMIZATION SANKEY
      sanhigh.series[0].data.push(
        [element.effectivePermissionAccount, element.policySrn, 1],
        [element.policySrn, element.prediction, 1]
      );

      //DETAILED SANKEY CHARTS
      sanhighArray.series[0].data.push(
        [element.effectivePermissionAccount, element.resourceSrn, 1],
        [element.resourceSrn, element.policySrn, 1],
        [element.policySrn, element.permission, 1],
        [element.permission, element.policyEntryResourceFilter, 1],
        [element.policyEntryResourceFilter, element.prediction, 1]
      );

      //DETAILED CARDS
      // set1.push(element.account);
      // set2.push(element.effectivePermission);
      // set3.push(element.policySrn);
      // set4.push(element.resourceSrn);
      // set5.push(element.policyEntryResourceFilter);
      // set6.push(element.prediction);
      // set7.push(element.policyName);
      // set8.push(element.swimlaneSrn);
    });

    setsanhighArray(sanhighArray);
    setsanArray(sanhigh);
    setLoading(false);

    // let count = [...new Set(set1)];
    // let per = [...new Set(set2)];
    // let policy = [...new Set(set3)];
    // let srn = [...new Set(set4)];
    // let filter = [...new Set(set5)];
    // let prediction = [...new Set(set6)];
    // let name = [...new Set(set7)];
    // let lane = [...new Set(set8)];

    // setaccountCount(count);
    // setperCount(per.length);
    // setpolicieCount(policy.length);
    // setsrnCount(srn.length);
    // setfilterCount(filter.length);
    // setpredictionCount(prediction.length);
    // setnamecount(name.length);
    // setlaneCount(lane.length);

    //SCATTERED PLOT
    // let el = [];
    // scatter.swin.forEach((element) => {
    //   el.push({
    //     name: element.swimlane,
    //     xlabel: "Permissions",
    //     ylabel: "Number Of Policies",
    //     data: element.accounts.map((item) => [
    //       item.total_policies,
    //       item.perm_count,
    //       item.reduced_perc,
    //     ]),
    //   });
    // });

    // setscatterdata(el);
    // setscatterdata2(el);

    let SwimlaneAccountCount = [];
    //BARCHART
    let barpolicy = [];
    scatter.swin.forEach((element) =>
      element.accounts.forEach((item) => {
        barpolicy.push({
          total_policies: item.total_policies,
          optimised_policies: item.optimised_policies,
        });
        SwimlaneAccountCount.push(item.effectivePermissionAccount);
      })
    );
    setbarAccountCount(SwimlaneAccountCount.slice(0, 20));

    let bar = [
      {
        name: "Original Set  Policies",
        data: barpolicy.map((element) => element.total_policies).slice(0, 20),
      },
      {
        name: "Optimal Set",
        data: barpolicy
          .map((element) => element.optimised_policies)
          .slice(0, 20),
      },
    ];

    setbarArray(bar);
  }, []);

  // const onDropDown = (value) => {
  //   if (value === "All") {
  //     setscatterdata(scatterdata2);
  //   } else {
  //     const el = scatterdata2.filter((element) => element.name === value);
  //     setscatterdata(el);
  //   }
  // };

  const onBarClick = (accounts) => {
    console.log(accounts);
    let filterarray = [];
  };

  // const onElementClick = (value) => {
  //   console.log("dd", value);
  //   let permissionArr = [];
  //   sankey.data.forEach((element) => {
  //     if (element.policyName === value) {
  //       permissionArr.push(element.effectivePermission);
  //     }
  //   });

  //   // permissionArr = [...new Set(permissionArr)];

  //   // let databubblearr = [];
  //   // permissionArr.forEach((element) =>
  //   //   databubblearr.push({
  //   //     name: element,
  //   //     //name_detail: element.policyName,
  //   //     //color: "pink",
  //   //     data: [
  //   //       {
  //   //         //color: "pink",
  //   //         format: element,
  //   //         // name: element.account,
  //   //         value: 10,
  //   //       },
  //   //     ],
  //   //   })
  //   // );
  //   // setdatabubbleArray(databubblearr);

  //   // console.log("dd", permissionArr);
  // };

  return (
    <div className="App">
      <SNavbar />
      <DateTime />
      <BeforeModel
        accountCount={accountCount}
        policieCount={policieCount}
        perCount={perCount}
        srnCount={srnCount}
      />
      <AfterModel
        accountCount={accountCount}
        policieCount={policieCount}
        perCount={perCount}
        srnCount={srnCount}
        predictionCount={predictionCount}
      />

      {/* <Card className="m-3 p-2">
        <DropdownComponent
          name="Swimlane"
          series={scatterdata2}
          onDropDown={onDropDown}
        /> 
         <Scatterplot series={scatterdata} />
      </Card> */}
      <OptimizationBarChart
        seriesData={barArray}
        categoryData={barAccountCount}
        onBarClick={onBarClick}
      />
      {/* <DetailedCards
        data={{
          accountCount: accountCount.length,
          srnCount: srnCount,
          predictionCount: predictionCount,
          policieCount: policieCount,
          perCount: perCount,
        }}
      /> */}
      <APBeforeOptimization isLoading={isLoading} tempArray={tempArray} />
      <APAfterOptimization isLoading={isLoading} sanArray={sanArray} />
      <DetailedView isLoading={isLoading} sanhighArray={sanhighArray} />
      <DetailedTable
        data={{
          accountCount: accountCount.length,
          srnCount: srnCount,
          predictionCount: predictionCount,
          policieCount: policieCount,
          perCount: perCount,
          filterCount: filterCount,
        }}
        sankeyData={{
          sankey,
          sonpai,
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
