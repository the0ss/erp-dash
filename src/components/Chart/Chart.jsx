// import { Card } from "flowbite-react";

// export function Chart() {

//   // const options = {
//   //   chart: {
//   //     height: "100%",
//   //     maxWidth: "100%",
//   //     type: "area",
//   //     fontFamily: "Inter, sans-serif",
//   //     dropShadow: {
//   //       enabled: false,
//   //     },
//   //     toolbar: {
//   //       show: false,
//   //     },
//   //   },
//   //   tooltip: {
//   //     enabled: true,
//   //     x: {
//   //       show: false,
//   //     },
//   //   },
//   //   fill: {
//   //     type: "gradient",
//   //     gradient: {
//   //       opacityFrom: 0.55,
//   //       opacityTo: 0,
//   //       shade: "#1C64F2",
//   //       gradientToColors: ["#1C64F2"],
//   //     },
//   //   },
//   //   dataLabels: {
//   //     enabled: false,
//   //   },
//   //   stroke: {
//   //     width: 6,
//   //   },
//   //   grid: {
//   //     show: false,
//   //     strokeDashArray: 4,
//   //     padding: {
//   //       left: 2,
//   //       right: 2,
//   //       top: 0,
//   //     },
//   //   },
//   //   series: [
//   //     {
//   //       name: "New users",
//   //       data: [6500, 6418, 6456, 6526, 6356, 6456],
//   //       color: "#1A56DB",
//   //     },
//   //   ],
//   //   xaxis: {
//   //     categories: [
//   //       "01 February",
//   //       "02 February",
//   //       "03 February",
//   //       "04 February",
//   //       "05 February",
//   //       "06 February",
//   //       "07 February",
//   //     ],
//   //     labels: {
//   //       show: false,
//   //     },
//   //     axisBorder: {
//   //       show: false,
//   //     },
//   //     axisTicks: {
//   //       show: false,
//   //     },
//   //   },
//   //   yaxis: {
//   //     show: false,
//   //   },
//   // };

//   // if (
//   //   document.getElementById("area-chart") &&
//   //   typeof ApexCharts !== "undefined"
//   // ) {
//   //   const chart = new ApexCharts(
//   //     document.getElementById("area-chart"),
//   //     options
//   //   );
//   //   chart.render();
//   // }

//   return (
//     <>
//       {/* <Card className="w-full max-w-3xl dark:bg-gray-800 p-4 md:p-6">
//         <div className="flex justify-between">
//           <div>
//             <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
//               32.4k
//             </h5>
//             <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//               Users this week
//             </p>
//           </div>
//           <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
//             12%
//             <svg
//               className="w-3 h-3 ms-1"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 13V1m0 0L1 5m4-4 4 4"
//               />
//             </svg>
//           </div>
//         </div>
//         <div id="area-chart"></div>
//         <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
//           <div className="flex justify-between items-center pt-5">
//             <button
//               id="dropdownDefaultButton"
//               data-dropdown-toggle="lastDaysdropdown"
//               data-dropdown-placement="bottom"
//               className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
//               type="button"
//             >
//               Last 7 days
//               <svg
//                 className="w-2.5 m-2.5 ms-1.5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 10 6"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m1 1 4 4 4-4"
//                 />
//               </svg>
//             </button>
//             <div
//               id="lastDaysdropdown"
//               className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//             >
//               <ul
//                 className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                 aria-labelledby="dropdownDefaultButton"
//               >
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                   >
//                     Yesterday
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                   >
//                     Today
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                   >
//                     Last 7 days
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                   >
//                     Last 30 days
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                   >
//                     Last 90 days
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <a
//               href="#"
//               className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
//             >
//               Users Report
//               <svg
//                 className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m1 9 4-4-4-4"
//                 />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </Card> */}

//     </>
//   );
// }

/**
 * Sample for Area series
 */
import * as React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  Highlight,
  SeriesDirective,
  Inject,
  Tooltip,
  DateTime,
  SplineAreaSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";
import { Card } from "flowbite-react";
export let data1 = [
  { x: new Date(2021, 1, 1), y: 0.0 },
  { x: new Date(2021, 2, 1), y: 1.0 },
  { x: new Date(2021, 6, 1), y: 2.8 },
  { x: new Date(2022, 2, 1), y: 2.9 },
  { x: new Date(2023, 1, 1), y: 5.0 },
  { x: new Date(2023, 5, 1), y: 2.5 },
  { x: new Date(2023, 9, 1), y: 3.2 },
  { x: new Date(2024, 1, 1), y: 6.0 },
  { x: new Date(2024, 6, 1), y: 6.2 },
  { x: new Date(2024, 12, 1), y: 6.4 },
];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;

export function Chart() {
  const onChartLoad = (args) => {
    let chart = document.getElementById("charts");
    chart.setAttribute("title", "");
  };
  const load = (args) => {
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Material";
    args.chart.theme = (
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    )
      .replace(/-dark/i, "Dark")
      .replace(/contrast/i, "Contrast");
  };
  return (
    <Card className="w-full max-w-3xl min-w-min control-pane dark:bg-gray-800 p-4 md:p-6">
        <style>{SAMPLE_CSS}</style>
        <div className="control-section">
          <ChartComponent
            id="charts"
            style={{ textAlign: "center", width:"fit-content" }}
            primaryXAxis={{
              valueType: "DateTime",
              labelFormat: "y",
              majorGridLines: { width: 0 },
              intervalType: "Years",
              minimum: new Date(2021, 0, 1),
              maximum: new Date(2025, 0, 1),
              edgeLabelPlacement: "Shift",
            }}
            primaryYAxis={{
              labelFormat: "{value}%",
              lineStyle: { width: 0 },
              maximum: 10,
              interval: 1,
              majorTickLines: { width: 0 },
              minorTickLines: { width: 0 },
            }}
            load={load.bind(this)}
            width={Browser.isDevice ? "100%" : "75%"}
            legendSettings={{ enableHighlight: true }}
            chartArea={{ border: { width: 0 } }}
            title="Users Rate in Percentage"
            loaded={onChartLoad.bind(this)}
            tooltip={{ enable: true }}
          >
            <Inject
              services={[
                SplineAreaSeries,
                DateTime,
                Tooltip,
                Legend,
                Highlight,
              ]}
            />
            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={data1}
                xName="x"
                yName="y"
                name="Users"
                marker={{
                  visible: true,
                  isFilled: true,
                  height: 6,
                  width: 6,
                  shape: "Circle",
                }}
                opacity={0.5}
                type="SplineArea"
                width={2}
                border={{ width: 2 }}
              ></SeriesDirective>
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
    </Card>
  );
}
