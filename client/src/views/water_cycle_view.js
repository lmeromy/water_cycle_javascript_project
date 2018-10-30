const PubSub = require('../helpers/pub_sub.js');

const WaterCycleView = function (container) {
  this.container = container;
};

WaterCycleView.prototype.bindEvents = function () {
  PubSub.subscribe('WaterData:all-cycle-elements-loaded', (event) => {
    // console.log('from view:', event.detail);
    let WcElements = event.detail;
    // console.log(thing = WcElements);

    const oceanImg = document.querySelector('#Ocean');
    const evaporationImg = document.querySelector('#Evaporation');
    const cloudsImg = document.querySelector('#Clouds');
    const pptImg = document.querySelector('#Precipitation');
    const mountainsImg = document.querySelector('#Mountains');
    const forestsImg = document.querySelector('#Forests');
    const surfaceh2oImg = document.querySelector('#Lakes-and-Rivers');
    const gwImg = document.querySelector('#Groundwater');
    const citiesImg = document.querySelector('#Cities');

    let selectorArray = [oceanImg, evaporationImg, cloudsImg, pptImg, mountainsImg, forestsImg, surfaceh2oImg, gwImg, citiesImg];


    WcElements.forEach((element, index) => {
      selectorArray[index].addEventListener('click', (event) => {
        this.renderWaterInfo(element);
      });
    })

  });
};


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
