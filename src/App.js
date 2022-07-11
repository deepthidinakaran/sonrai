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
import SankeyCharts from "./components/SankeyCharts";
import scatter from "./config/scatter.json";

function App() {
  const [barArray, setbarArray] = useState({});
  const [accountCount, setaccountCount] = useState(6);
  const [perCount, setperCount] = useState(29);
  const [policieCount, setpolicieCount] = useState(14);
  const [srnCount, setsrnCount] = useState(18);
  const [filterCount, setfilterCount] = useState(0);
  const [predictionCount, setpredictionCount] = useState();
  const [barAccountCount, setbarAccountCount] = useState(0);
  const [accountNumber, setAccountNumber] = useState("");

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
  }, []);

  const onBarClick = (event) => {
    setAccountNumber(event.point.category);
  };


  return (
    <div className="App">
      <SNavbar />
      <DateTime />
      <Dropdown className="mr-3" style={{ textAlign: "right" }}>
        <Dropdown.Toggle>Account</Dropdown.Toggle>
      </Dropdown>
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
      <SankeyCharts accountNumber={accountNumber} />
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
