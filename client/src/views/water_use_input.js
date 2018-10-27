const PubSub = require('../helpers/pub_sub.js');

const WaterUseInputView = function (form) {
  this.form = form;
};

WaterUseInputView.prototype.bindEvents = function () {
   this.form.addEventListener('submit', (event) => {
     console.log('from input view:', event);
     this.handleSubmit(event);
   });
};

WaterUseInputView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  // const newWaterUser = this.createWaterUser(evt.target);
  PubSub.publish('WaterUseInputView:water-user-submit', newWaterUser);
  evt.target.reset;
};

//
// WaterUseInputView.prototype.createWaterUser = function (input) {
//   const newWaterUser = {
//     name: "inputUser",
//     teeth: input.teeth.value,
//     flush: input.flush.value,
//     bathe: input.bathe.value
//   }
//   return newWaterUser;
// };


module.exports = WaterUseInputView;
