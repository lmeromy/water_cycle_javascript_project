const WaterData = require('./models/water_data.js');
const WaterCycleView = require('./views/water_cycle_view.js');


document.addEventListener('DOMContentLoaded', () => {
    // console.log('Javascript Loaded');

    const waterCycleContainer = document.querySelector('#image-container');
    const waterCycleView = new WaterCycleView(waterCycleContainer);

    const waterCycleUrl = 'http://localhost:3000/api/water-cycle';
    const waterCycle = new WaterData(waterCycleUrl);
    waterCycle.getData_h2o_cycle();

});
