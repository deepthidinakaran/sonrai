// import { useState, useEffect } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import NoDataToDisplay from "highcharts/modules/no-data-to-display";

// NoDataToDisplay(Highcharts);

// function ScatterPlot(props) {
//   const [chartOptions, setChartOptions] = useState({});
//   useEffect(() => {
//     const options = {
//       lang: {
//         thousandsSep: "\u002C",
//         noData: "No data to display",
//       },
//       chart: {
//         zoomType: "xy",
//         type: "scatter",
//         height: 250,
//         backgroundColor: "transparent",
//         spacingBottom: 0,
//         animation: false,
//       },
//       credits: {
//         enabled: false,
//       },
//       xAxis: {
//         lineWidth: 0,
//         tickLength: 0,
//         title: {
//           enabled: true,
//           text: "Permissions",
//           style: {
//             color: "black",
//             cursor: "default",
//             fontSize: " 10px",
//             fontFamily: "Arial",
//             fontWeight: "normal",
//           },
//         },
//         labels: {
//           style: {
//             color: "black",
//             cursor: "default",
//             fontSize: " 10px",
//             fontFamily: "Arial",
//             fontWeight: "normal",
//           },
//         },
//       },
//       yAxis: {
//         gridLineWidth: 0,
//         lineWidth: 0,
//         title: {
//           enabled: true,
//           text: "No:of Policies",
//           style: {
//             color: "black",
//             cursor: "default",
//             fontSize: " 10px",
//             fontFamily: "Arial",
//             fontWeight: "normal",
//           },
//         },
//         labels: {
//           style: {
//             color: "black",
//             cursor: "default",
//             fontSize: " 10px",
//             fontFamily: "Arial",
//             fontWeight: "normal",
//           },
//         },
//         allowDecimals: false,
//       },

//       title: {
//         text: "Chart Title",
//         align: "left",
//         style: {
//           color: "#FFFFFF",
//           fontSize: "12px",
//           fontFamily: "Arial",
//         },
//       },

//       tooltip: {
//         formatter() {
//           return (
//             "<div><div>" +
//             this.series.name +
//             "</div><span>" +
//             this.series.xAxis.options.title.text +
//             ": " +
//             this.point?.x +
//             "</span><br/><span>" +
//             this.series.yAxis.options.title.text +
//             ": " +
//             this.point?.y +
//             "</span></div>"
//           );
//         },
//         style: {
//           color: "white",
//           fontSize: "11px",
//           fontFamily: "arial",
//           fontWeight: "normal",
//         },
//         backgroundColor: "black",
//         shared: true,
//         useHTML: true,
//         valueDecimals: 2,
//         snap: 1,
//       },

//       plotOptions: {
//         scatter: {
//           marker: {
//             symbol: "circle",
//           },

//           opacity: 0.8,
//         },
//         series: {
//           //   keys: props.seriesKeys,
//           cursor: "pointer",

//           marker: {
//             states: {
//               hover: {
//                 lineColor: "white",
//                 radius: 10,
//               },
//             },
//           },
//         },
//         tooltip: {
//           followPointer: false,
//         },
//       },
//       legend: {
//         enabled: false,
//         align: "center",
//         verticalAlign: "bottom",

//         itemStyle: {
//           color: "black",
//           fontSize: "11px",
//           fontWeight: "normal",
//           fontFamily: "Arial",
//         },
//         itemHoverStyle: {
//           color: "black",
//           fontSize: "11px",
//           fontFamily: "Arial",
//           fontWeight: "normal",
//         },
//       },
//       series: props.series,
//     };

//     setChartOptions(options);
//   }, [props]);

//   return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
// }

// export default ScatterPlot;
