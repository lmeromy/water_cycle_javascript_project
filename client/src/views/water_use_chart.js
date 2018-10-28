const PubSub = require('../helpers/pub_sub.js');

const WaterUseChart = function(container){
  this.container = container;
};

WaterUseChart.prototype.bindEvents = function () {
  PubSub.subscribe('WaterData:all-use-elements-loaded', (event) => {
    console.log(event.detail);
  })
};


module.exports = WaterUseChart;
