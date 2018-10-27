const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const WaterData = function (url){
  this.url = url
  this.items = [];
};


WaterData.prototype.getData_h2o_cycle = function () {
  const request = new Request(this.url);
  request.get()
  .then((cycleElements) => {
    PubSub.publish('WaterData:all-cycle-elements-loaded', cycleElements);
    // console.log(cycleElements);
  })
   .catch(console.error);
};


module.exports = WaterData;
