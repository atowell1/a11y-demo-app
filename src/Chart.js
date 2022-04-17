// import { render } from '@testing-library/react';
// import Highcharts from 'Highcharts';
// import React from 'react';

// // var Highcharts = require('highcharts');  
// // // Load module after Highcharts is loaded
// // require('highcharts/modules/exporting')(Highcharts);  
// // // Create the chart
// // Highcharts.chart('container', { /*Highcharts options*/ });

// // Build the chart
// class Chart extends React.Component {
//   Highcharts.chart('container', {
//   chart: {
//     plotBackgroundColor: null,
//     plotBorderWidth: null,
//     plotShadow: false,
//     type: 'pie'
//   },
//   title: {
//     text: 'Browser market shares in January, 2018'
//   },
//   tooltip: {
//     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//   },
//   accessibility: {
//     point: {
//       valueSuffix: '%'
//     }
//   },
//   plotOptions: {
//     pie: {
//       allowPointSelect: true,
//       cursor: 'pointer',
//       dataLabels: {
//         enabled: false
//       },
//       showInLegend: true
//     }
//   },
//   series: [{
//     name: 'Brands',
//     colorByPoint: true,
//     data: [{
//       name: 'Chrome',
//       y: 61.41,
//       sliced: true,
//       selected: true
//     }, {
//       name: 'Internet Explorer',
//       y: 11.84
//     }, {
//       name: 'Firefox',
//       y: 10.85
//     }, {
//       name: 'Edge',
//       y: 4.67
//     }, {
//       name: 'Safari',
//       y: 4.18
//     }, {
//       name: 'Other',
//       y: 7.05
//     }]
//   }]
// });

//   render() {
//     <div>
//       <script src="https://code.highcharts.com/highcharts.js"></script>
//       <script src="https://code.highcharts.com/modules/exporting.js"></script>
//       <script src="https://code.highcharts.com/modules/export-data.js"></script>
//       <script src="https://code.highcharts.com/modules/accessibility.js"></script>

//       <figure class="highcharts-figure">
//         <div id="container"></div>
//         <p class="highcharts-description">
//           This pie chart shows how the chart legend can be used to provide
//           information about the individual slices.
//         </p>
//       </figure>
//     </div>
//     }
// }

// export default Chart;