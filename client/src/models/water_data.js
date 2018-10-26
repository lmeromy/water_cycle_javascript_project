const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const WaterData = function (url){
  this.url = url
  this.items = [];
};



module.exports = WaterData;
