import React, { useState, useEffect } from "react";
import APBeforeOptimization from "./sankey/APBeforeOptimization";
import APAfterOptimization from "./sankey/APAfterOptimization";
import DetailedView from "./sankey/DetailedView";
import account548652128817 from "../config/account2.json";
import account003074056772 from "../config/account3.json";
import account064667896599 from "../config/account4.json";
import account213217834095 from "../config/account5.json";
import account380873608913 from "../config/account6.json";
import account717025312494 from "../config/account7.json";

//INITIAL SANKEY OPTIONS
let sankeyOptions = {
  chart: {
    maxHeight: 1000,
  },
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
      minLinkWidth: 1,
      data: [],
      type: "sankey",
      dataLabels: {
        allowOverlap: true,
      },
      nodePadding: 1,
      useHTML: true,
      name: "",
    },
  ],
  dataLabels: {
    enabled: true,
  },
};

const SankeyCharts = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [tempArray, setTempArray] = useState({});
  const [sanArray, setsanArray] = useState({});
  const [sanhighArray, setsanhighArray] = useState({});

  const getSankeyData = (value) => {
    setLoading(true);

    //DUPLICATING FOR EACH SANKEY CHART
    let temp = JSON.parse(JSON.stringify(sankeyOptions));
    let sanhigh = JSON.parse(JSON.stringify(sankeyOptions));
    let sanhighArray = JSON.parse(JSON.stringify(sankeyOptions));
    let allPolicies = [];

    let fileName = "";

    if (value == "548652128817") {
      fileName = account548652128817;
    } else if (value == "003074056772") {
      fileName = account003074056772;
    } else if (value == "064667896599") {
      fileName = account064667896599;
    } else if (value == "213217834095") {
      fileName = account213217834095;
    } else if (value == "380873608913") {
      fileName = account380873608913;
    } else if (value === "717025312494") {
      fileName = account717025312494;
    }

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
    setLoading(false);
  };

  useEffect(() => {
    props.accountNumber && getSankeyData(props.accountNumber);
  }, [props.accountNumber]);

  return (
    <>
      {!isLoading && (
        <>
          <APBeforeOptimization isLoading={isLoading} tempArray={tempArray} />
          <APAfterOptimization isLoading={isLoading} sanArray={sanArray} />
          <DetailedView isLoading={isLoading} sanhighArray={sanhighArray} />
        </>
      )}
    </>
  );
};

export default SankeyCharts;
