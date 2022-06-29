import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
// import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";
// HighchartsSankey(Highcharts);

const Barchart = (props) => {
  useEffect(() => {
    setchartData();
  }, [props]);
  console.log(props);

  const [chartoptions, setchartoptions] = useState({});
  const setchartData = () => {
    let chartOptions = {
      chart: {
        type: "column",
      },
      credits: {
        enabled: false,
      },
      title: {
        text: "Policies Before and After Optimisation",
        align: "left",
        style: {
          //color: currentTheme === "dark" ? "#000" : "#FFFFFF",
          fontSize: "16px",
          fontFamily: "Arial",
          fontWeight: "bold",
        },
      },
      xAxis: {
        categories: props.categoryData,
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: "",
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },
      colors: ["#C86180", "#6F7DD5"],
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
        series: {
          cursor: "pointer",
          events: {
            click: function (event) {
              console.log("shama", event);
            },
          },
        },
      },
      series: props.seriesData,
    };
    setchartoptions(chartOptions);
  };

  return <HighchartsReact highcharts={Highcharts} options={chartoptions} />;
};
export default Barchart;
