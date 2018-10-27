const PubSub = require('../helpers/pub_sub.js');

const WaterCycleView = function (container) {
 this.container = container;
};

PubSub.subscribe('WaterData:all-cycle-elements-loaded', (event) => {
  // console.log('from view:', event.detail);
  const WcElements = event.detail;
  // console.log(thing = WcElements);
  const oceanImg = document.querySelector('#ocean');
  oceanImg.addEventListener('click', (event) => {
    WcElements.forEach((element) => {
      if(element.name === "ocean"){
        this.renderWaterInfo(element);
      }
    });
  });


});

WaterCycleView.prototype.renderWaterInfo = function (element) {

  const textRenderArea = document.querySelector('#text-container');
  textRenderArea.innerHTML = '';

  const nameHeading = document.createElement('h3');
  nameHeading.textContent = element.name;
  textRenderArea.appendChild(nameHeading);

  const description = document.createElement('p');
  description.textContent = element.description;
  textRenderArea.appendChild(description);

};

module.exports = WaterCycleView;
