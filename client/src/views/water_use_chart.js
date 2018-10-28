const PubSub = require('../helpers/pub_sub.js');

const WaterUseChart = function(container){
  this.container = container;
};

WaterUseChart.prototype.bindEvents = function () {
  PubSub.subscribe('WaterData:water-users-ready', (event) => {
    // console.log('from chartview', test = event.detail);
    this.prepare(event.detail);
  })
  this.render()
};

WaterUseChart.prototype.prepare = function (data) {
  // console.log('Data', test = data);
  const avgUser = data[0].bathe + data[0].teeth + data[0].flush;
  const newUser = data[-1].bathe + data[-1].teeth + data[-1].flush;

};

WaterUseChart.prototype.render = function () {

  google.charts.load("current", {packages:['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ["Element", "Density", { role: "style" } ],
          ["Copper", 8.94, "#b87333"],
          ["Silver", 10.49, "silver"],
          ["Gold", 19.30, "gold"],
          ["Platinum", 21.45, "color: #e5e4e2"]
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         { calc: "stringify",
                           sourceColumn: 1,
                           type: "string",
                           role: "annotation" },
                         2]);

        var options = {
          title: "Density of Precious Metals, in g/cm^3",
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
