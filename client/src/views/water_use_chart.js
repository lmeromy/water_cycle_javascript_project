const PubSub = require('../helpers/pub_sub.js');

const WaterUseChart = function(container){
  this.container = container;
};

WaterUseChart.prototype.bindEvents = function () {
  PubSub.subscribe('WaterData:water-users-ready', (event) => {
    // console.log('from chartview', test = event.detail);
    const chartArray = this.prepare(event.detail);
    this.render(chartArray)
  })

};

WaterUseChart.prototype.prepare = function (data) {
  // console.log('Data', test = data);
  const avgUser = data[0].bathe + data[0].teeth + data[0].flush;
  const newUser = data[data.length-1].bathe + data[data.length-1].teeth + data[data.length-1].flush;

  const chartArray = [avgUser, newUser];
  return chartArray;

};

WaterUseChart.prototype.render = function (chartArray) {

  google.charts.load("current", {packages:['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ["Avg Water Use", "Your Water Use", { role: "style" } ],
          ["Av Water Use", chartArray[0], "#b87333"],
          ["Your Water Use", chartArray[1], "silver"]

        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         { calc: "stringify",
                           sourceColumn: 1,
                           type: "string",
                           role: "annotation" },
                         2]);

        var options = {
          title: "Compare your water use",
          width: 600,
          height: 400,
          bar: {groupWidth: "95%"},
          legend: { position: "none" },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("water-use-chart"));
        chart.draw(view, options);
    }

};
module.exports = WaterUseChart;
