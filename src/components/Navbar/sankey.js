import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";

HighchartsSankey(Highcharts);
const [tempArray, setTempArray] = useState({});
const [sanArray, setsanArray] = useState({});
const [sanhighArray, setsanhighArray] = useState({});

const [isLoading, setLoading] = useState(true);
const Page2 = (props) => {
  return useEffect(() => {
    let temp = {
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
    let high = [
      ...new Map(
        sankey.data.map((item) => [item["policyName"], item])
      ).values(),
    ];
    high.forEach((element) =>
      temp.series[0].data.push(
        [element.account, element.policyName, 1]
        // [element.resourceSrn, element.policyName, 1],
        // [element.policyName, element.effectivePermission, 1],
        // [element.effectivePermission, element.policyEntryResourceFilter, 1],
        // [element.policyEntryResourceFilter, element.prediction, 1]
      )
    );
    // console.log("shama", temp);
    setTempArray(temp);

    let sanhigh = {
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
    sankey.data.forEach((element) =>
      sanhigh.series[0].data.push(
        [element.account, element.policyName, 1],
        [element.policyName, element.resourceSrn, 1],
        [element.resourceSrn, element.effectivePermission, 1],
        [element.effectivePermission, element.policyEntryResourceFilter, 1],
        [element.policyEntryResourceFilter, element.prediction, 1]
      )
    );

    setsanhighArray(sanhigh);

    let san = {
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
    sankey.data.forEach((element) =>
      san.series[0].data.push(
        [element.account, element.policySrn, 1],
        [element.policySrn, element.prediction, 1]
        // [element.effectivePermission, element.policyEntryResourceFilter, 1],
        // [element.policyEntryResourceFilter, element.prediction, 1]
      )
    );

    setsanArray(san);

    setLoading(false);
  });
};

export default Page2;
