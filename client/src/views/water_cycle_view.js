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
//
//
// for(var i = 0;i < 10;i++) {
//     try{throw i}
//     catch(ii) {
//         setTimeout(function(){
//             console.log(ii);
//         },1000);
//     }
// }

// for(let element of WcElements){
//   try{throw element}
//   catch(element_ii){
//     for(let selector of selectorArray){
//       try{throw selector}
//       catch(selector_ii){
//         selector_ii.addEventListener('click', (event) => {
//           this.renderWaterInfo(element_ii);
//         });
//       }
//     }
//   }
// }

//
// //Leah's loop
// for(let element of WcElements){
//   for(let selector of selectorArray){
//     selector.addEventListener('click', (event) => {
//       this.renderWaterInfo(element);
//     });
//   }
// }

//Colin's loop
WcElements.forEach((element, index) => {
  for(let selector of selectorArray){
    selector.addEventListener('click', (event) => {
      const process = WcElements[index]
      this.renderWaterInfo(WcElements[index]);
    });
  }
})


    // const oceanImg = document.querySelector('#Ocean');
    // oceanImg.addEventListener('click', (event) => {
    //   this.renderWaterInfo(WcElements[0]);
    // });
    // const evaporationImg = document.querySelector('#Evaporation');
    // evaporationImg.addEventListener('click', (event) => {
    //   this.renderWaterInfo(WcElements[1]);
    // });
    // const cloudsImg = document.querySelector('#Clouds');
    // cloudsImg.addEventListener('click', (event) => {
    //   this.renderWaterInfo(WcElements[2]);
    // });
    // const pptImg = document.querySelector('#Precipitation');
    // pptImg.addEventListener('click', (event) => {
    //   this.renderWaterInfo(WcElements[3]);
    // });
    // const mountainsImg = document.querySelector('#Mountains');
    // mountainsImg.addEventListener('click', (event) => {
    //   this.renderWaterInfo(WcElements[4]);
    // });
    // const forestsImg = document.querySelector('#Forests');
    // forestsImg.addEventListener('click', (event) => {
    //   this.renderWaterInfo(WcElements[5]);
    // });
    // const surfaceh2oImg = document.querySelector('#Lakes-and-Rivers');
    // surfaceh2oImg.addEventListener('click', (event) => {
    //   this.renderWaterInfo(WcElements[6]);
    // });
    // const gwImg = document.querySelector('#Groundwater');
    // gwImg.addEventListener('click', (event) => {
    //   this.renderWaterInfo(WcElements[7]);
    // });
    // const citiesImg = document.querySelector('#Cities');
    // citiesImg.addEventListener('click', (event) => {
    //   this.renderWaterInfo(WcElements[8]);
    // });

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
