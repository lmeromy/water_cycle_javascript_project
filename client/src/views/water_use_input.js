const PubSub = require('../helpers/pub_sub.js');

const WaterUseInputView = function (form) {
  this.form = form;
};

WaterUseInputView.prototype.bindEvents = function () {
   this.form.addEventListener('submit', (event) => {
     // console.log('from input view:', event);
     this.handleSubmit(event);
   });
};

WaterUseInputView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newWaterUser = this.createWaterUser(evt.target);
  PubSub.publish('WaterUseInputView:water-user-submit', newWaterUser);
  // console.log('water use input:', newWaterUser);
  evt.target.reset;
};


WaterUseInputView.prototype.createWaterUser = function (input) {
  const newWaterUser = {
    name: "inputUser",
    teeth: Number(input[0].value), //ask about these values([0], [1], etc)
    flush: Number(input[1].value),
    bathe: Number(input[2].value)
  }
  return newWaterUser;

};


module.exports = WaterUseInputView;
