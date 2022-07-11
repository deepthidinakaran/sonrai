import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import SNavbar from "./components/Navbar/SNavbar";
import DetailedTable from "./components/DetailedTable";
import OptimizationBarChart from "./components/OptimizationBarChart";
import "./App.css";
import sankey from "./config/sankey.json";
import sonpai from "./config/sonpai.json";
import Footer from "./components/footer";
import DateTime from "./components/Date";
import AfterModel from "./components/AfterModel";
// import BeforeModel from "./components/BeforeModel";
import APAfterOptimization from "./components/sankey/APAfterOptimization";
import APBeforeOptimization from "./components/sankey/APBeforeOptimization";
import DetailedView from "./components/sankey/DetailedView";
import scatter from "./config/scatter.json";
import account548652128817 from "./config/account2.json";
import account003074056772 from "./config/account3.json";
import account064667896599 from "./config/account4.json";
import account213217834095 from "./config/account5.json";
import account380873608913 from "./config/account6.json";
import account717025312494 from "./config/account7.json";

//INITIAL SANKEY OPTIONS
let sankeyOptions = {
  credits: {
    enabled: false,
  },
  title: {
    text: "",
    style: {
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

function App() {
  const [tempArray, setTempArray] = useState({});
  const [barArray, setbarArray] = useState({});
  const [sanArray, setsanArray] = useState({});
  const [sanhighArray, setsanhighArray] = useState({});
  const [accountCount, setaccountCount] = useState(6);
  const [perCount, setperCount] = useState(29);
  const [policieCount, setpolicieCount] = useState(14);
  const [srnCount, setsrnCount] = useState(18);
  const [filterCount, setfilterCount] = useState(0);
  const [predictionCount, setpredictionCount] = useState();
  const [laneCount, setlaneCount] = useState(0);
  const [namecount, setnamecount] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [barAccountCount, setbarAccountCount] = useState(0);

  useEffect(() => {
    //BARCHART
    let SwimlaneAccountCount = [];
    let barpolicy = [];
    scatter.swin.forEach((item) => {
      barpolicy.push({
        total_recommendations: item.total_recommendations,
        optimised_recommendations: item.optimised_recommendations,
      });
      SwimlaneAccountCount.push(item.account);
    });
    setbarAccountCount(SwimlaneAccountCount.slice(0, 20));

    let bar = [
      {
        name: "Original Set  Policies",
        data: barpolicy
          .map((element) => element.total_recommendations)
          .slice(0, 20),
      },
      {
        name: "Optimal Set",
        data: barpolicy
          .map((element) => element.optimised_recommendations)
          .slice(0, 20),
      },
    ];
    setbarArray(bar);
    // getSankeyData();
  }, []);

  const onBarClick = (event) => {
    let accountNumber = event.point.category;
    getSankeyData(accountNumber);
  };

  const getSankeyData = (value) => {
    setLoading(true);
    //DUPLICATING FOR EACH SANKEY CHART
    let temp = JSON.parse(JSON.stringify(sankeyOptions));
    let sanhigh = JSON.parse(JSON.stringify(sankeyOptions));
    let sanhighArray = JSON.parse(JSON.stringify(sankeyOptions));
    let allPolicies = [];

    let fileName = "";
    if (value === "548652128817") {
      fileName = account548652128817;
    } else if (value === "003074056772") {
      fileName = account003074056772;
    } else if (value === "064667896599") {
      fileName = account064667896599;
    } else if (value === "213217834095") {
      fileName = account213217834095;
    } else if (value === "380873608913") {
      fileName = account380873608913;
    } else if (value === "717025312494") {
      fileName = account717025312494;
    }

    console.log("shama", fileName.data);

    fileName.data.forEach((element) => {
      //BEFORE OPTIMIZATION SANKEY
      allPolicies.push([element["policySrn"], element]);

      //AFTER OPTIMIZATION SANKEY
      sanhigh.series[0].data.push(
        [value, element.policySrn, 1],
        [element.policySrn, element.prediction, 1]
      );

      //DETAILED SANKEY CHARTS
      sanhighArray.series[0].data.push(
        [value, element.resourceSrn, 1],
        [element.resourceSrn, element.policySrn, 1],
        [element.policySrn, element.permission, 1],
        [element.permission, element.policyEntryResourceFilter, 1],
        [element.policyEntryResourceFilter, element.prediction, 1]
      );
    });

    //BEFORE OPTIMIZATION SANKEY
    let distinctPolicies = [...new Map(allPolicies).values()];
    distinctPolicies.forEach((element) =>
      temp.series[0].data.push([value, element.policySrn, 1])
    );
    setTempArray(temp);
    setsanhighArray(sanhighArray);
    setsanArray(sanhigh);

    console.log("dd", temp, sanhighArray, sanhigh);
    setLoading(false);
  };

  return (
    <div className="App">
      <SNavbar />
      <DateTime />
      <Dropdown className="mr-3" style={{ textAlign: "right" }}>
        <Dropdown.Toggle>Account</Dropdown.Toggle>
      </Dropdown>
      {/* <BeforeModel
        accountCount={accountCount}
        policieCount={policieCount}
        perCount={perCount}
        srnCount={srnCount}
      /> */}
      <AfterModel
        accountCount={accountCount}
        policieCount={policieCount}
        perCount={perCount}
        srnCount={srnCount}
        predictionCount={predictionCount}
      />
      <OptimizationBarChart
        seriesData={barArray}
        categoryData={barAccountCount}
        onBarClick={onBarClick}
      />
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <APBeforeOptimization isLoading={isLoading} tempArray={tempArray} />
          <APAfterOptimization isLoading={isLoading} sanArray={sanArray} />
          <DetailedView isLoading={isLoading} sanhighArray={sanhighArray} />
        </>
      )}

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
