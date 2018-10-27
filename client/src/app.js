const WaterData = require('./models/water_data.js');
const WaterCycleView = require('./views/water_cycle_view.js');


document.addEventListener('DOMContentLoaded', () => {
    // console.log('Javascript Loaded');

    const waterCycleContainer = document.querySelector('#water-cycle-container');
    const waterCycleView = new WaterCycleView(waterCycleContainer);
    waterCycleView.bindEvents();

    const waterCycleUrl = 'http://localhost:3000/api/water-cycle';
    const waterCycle = new WaterData(waterCycleUrl);
    waterCycle.getData_h2o_cycle();

});
