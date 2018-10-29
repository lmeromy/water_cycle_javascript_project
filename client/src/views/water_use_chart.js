const PubSub = require('../helpers/pub_sub.js');

const WaterUseChart = function(container){
  this.container = container;
};

WaterUseChart.prototype.bindEvents = function () {
  PubSub.subscribe('WaterData:water-users-ready', (event) => {
    // console.log('from chartview', test = event.detail);
    const chartArray = this.prepareVisWaterUse(event.detail);
    this.renderVis(chartArray)

    const chartArray2 = this.prepareInvisWaterUse(event.detail);
    this.renderInvis(chartArray2)
  })

};

WaterUseChart.prototype.prepareVisWaterUse = function (data) {
  // console.log('Data', test = data);
  const avgUser = data[0].bathe + data[0].teeth + data[0].flush;
  const newUser = data[data.length-1].bathe + data[data.length-1].teeth + data[data.length-1].flush;

  const chartArray = [avgUser, newUser];
  return chartArray;
};

WaterUseChart.prototype.prepareInvisWaterUse = function (data) {
  // console.log('Data', test = data);
  const avgMeat = data[0].meat;
  const avgVeggie = data[0].veggie;
  const avgVegan = data[0].vegan;
  const newUserDiet = data[data.length-1].diet;

  const chartArray = [avgMeat, avgVeggie, avgVegan, newUserDiet];
  return chartArray;
};



WaterUseChart.prototype.renderVis = function (chartArray) {

  google.charts.load("current", {packages:['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        const data = google.visualization.arrayToDataTable([
          ["Avg Water Use", "Your Water Use", { role: "style" } ],
          ["Av Water Use", chartArray[0], "blue"],
          ["Your Water Use", chartArray[1], "lightblue"]
        ]);

        const view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         // { calc: "stringify",
                         //   sourceColumn: 1,
                         //   type: "string",
                         //   role: "annotation" },
                         2]);

        const options = {
          title: "Compare your daily visible water use",
          width: 600,
          height: 400,
          vAxis: {
            title: 'Litres of Water per day',
            minValue: 100,
            maxValue: 170,
            baselineColor: '#DDD',
            gridlines: {
              color: '#DDD',
              count: 6
            }
          },
          bar: {groupWidth: "95%"},
          legend: { position: "none" },
        };
        const chart = new google.visualization.ColumnChart(document.getElementById("water-use-vis-chart"));
        chart.draw(view, options);
    }

};

WaterUseChart.prototype.renderInvis = function (chartArray) {

  google.charts.load("current", {packages:['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        const data = google.visualization.arrayToDataTable([
          ["Avg UK Meat Diet", "Avg UK Veggie Diet", { role: "style" } ],
          ["Avg UK Meat Diet", chartArray[0], "red"],
          ["Avg UK Veggie Diet", chartArray[1], "orange"],
          ["Avg UK Vegan Diet", chartArray[2], "yellow"],
          ["Your Diet", chartArray[3], "green"]

        ]);

        const view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         // { calc: "stringify",
                         //   sourceColumn: 1,
                         //   type: "string",
                         //   role: "annotation" },
                         2]);

        const options = {
          title: "Invisible Water Use: How does your invisible water use stack up?",
          width: 600,
          height: 400,
          vAxis: {
            title: 'Litres of Water per day',
            minValue: 0,
            maxValue: 4500,
            baselineColor: '#DDD',
            gridlines: {
              color: '#DDD',
              count: 6
            }
          },
          bar: {groupWidth: "95%"},
          legend: { position: "none" },
        };
        const chart = new google.visualization.ColumnChart(document.getElementById("water-use-invis-chart"));
        chart.draw(view, options);
    }

};

module.exports = WaterUseChart;
