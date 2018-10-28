const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const WaterData = function (url){
  this.url = url
  this.items = [];
};

WaterData.prototype.bindEvents = function () {

  PubSub.subscribe('WaterUseInputView:water-user-submit', (event) => {
    this.postUserInput(event.detail);
    // console.log('water data:', event.detail);
  });


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

// SENDING USER INPUT TO THE DATABASE
WaterData.prototype.postUserInput = function (input) {
  const request = new Request(this.url);
  request.post(input)
  .then((uses) => {
    PubSub.publish('WaterData:water-user-ready', uses);
    // console.log('published user input:', uses);
  })
  .catch(console.error);
};


WaterData.prototype.getData_h2o_use = function () {
  const request = new Request(this.url);
  request.get()
  .then((useElements) => {
    PubSub.publish('WaterData:all-use-elements-loaded', useElements);
    // console.log(useElements);
  })
   .catch(console.error);
};


module.exports = WaterData;
