// import React, { Component } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import HC_more from "highcharts/highcharts-more";
// import NoDataToDisplay from "highcharts/modules/no-data-to-display";
// //import { CHART_TOOLTIP_LIGHT_THEME_BG } from "../../constants/colors";

// NoDataToDisplay(Highcharts);
// HC_more(Highcharts);
// class PackedBubbleChart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       chartOptions: {},
//       bubbleData: [],
//     };
//   }

//   componentDidMount = () => {
//     this.setCompaniesChartData(
//       this.props.bubbleData,
//       this.props.title
//       //this.props.currentTheme
//     );
//   };

//   shouldComponentUpdate(nextProps) {
//     if (
//       JSON.stringify(this.props.bubbleData) !==
//         JSON.stringify(nextProps.bubbleData) ||
//       this.props.currentTheme !== nextProps.currentTheme
//     ) {
//       this.setState({ bubbleData: nextProps.bubbleData });
//       this.setCompaniesChartData(
//         nextProps.bubbleData,
//         nextProps.title,
//         nextProps.currentTheme
//       );
//     }
//     return true;
//   }

//   setCompaniesChartData = (bubbleData, title, currentTheme) => {
//     const options = {
//       chart: {
//         type: "packedbubble",
//         //backgroundColor: "transparent",
//         height: this.props.height,
//         animation: false,
//       },
//       //colors: this.props.colors ? this.props.colors : "",
//       credits: {
//         enabled: false,
//       },
//       legend: {
//         enabled: false,
//       },

//       title: {
//         text: title ? title : this.props.title,
//         align: "left",
//         style: {
//           //color: currentTheme === "dark" ? "#000" : "#FFFFFF",
//           fontSize: "15px",
//           fontFamily: "Arial",
//           fontWeight: "bold"
//         },
//       },
//       boost: {
//         useGPUTranslations: true,
//         // Chart-level boost when there are more than 5 series in the chart
//         seriesThreshold: 5,
//       },
//       // tooltip: {
//       //followPointer: true,
//       // nullFormat: 'Value is not available.',
//       //formatter() {
//       //console.log(this.point.name);
//       // return (
//       // <div style={{ color: "black", fontSize: "20px" }}>
//       //       {this.point.name}
//       //     </div>
//       //   );
//       // },
//       // style: {
//       //   backgroundColor: "white",
//       //   fontSize: "11px",
//       //   fontFamily: "arial",
//       //   fontWeight: "normal",
//       // },
//       //backgroundColor: "white",
//       // shared: false,
//       //useHTML: true,
//       // valueDecimals: 2,
//       //},
//       plotOptions: {
//         packedbubble: {
//           minSize: "40%",
//           maxSize: "90%",
//           useSimulation: false,
//           // layoutAlgorithm: {
//           //   enableSimulation: true,
//           //   splitSeries: (this.props.chartOption && this.props.chartOption.splitSeries==false)?this.props.chartOption.splitSeries:true,
//           //   gravitationalConstant: 0.01,
//           // },
//           dataLabels: {
//             enabled: true,
//             format: "{point.format}",
//             style: {
//               color: "black",
//               textOutline: "none",
//               fontWeight: "normal",
//               fontSize: "11px",
//               fontFamily: "Arial",
//             },
//             filter: {
//               property: "y",
//               operator: ">",
//               value: 0,
//             },
//           },
//           point: {
//             events: {
//               click: (e) => {
//                 this.props.onElementClick(e.point.format);
//               },
//             },
//           },
//           cursor: this.props.cursor,
//         },
//       },
//       series: bubbleData,
//     };
//     this.setState({
//       chartOptions: options,
//     });
//   };

//   render() {
//     Highcharts.setOptions({
//       lang: {
//         thousandsSep: "\u002C",
//       },
//     });
//     console.log(this.props.bubbleData);
//     return (
//       <>
//         <HighchartsReact
//           //className="rna-companies"
//           options={this.state.chartOptions}
//           highcharts={Highcharts}
//         />
//       </>
//     );
//   }
// }

// export default PackedBubbleChart;
