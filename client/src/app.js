const WaterData = require('./models/water_data.js');


document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript Loaded');

    const waterCycleUrl = 'http://localhost:3000/api/water-cycle';
    const waterCycle = new WaterData(waterCycleUrl);
    waterCycle.getData_h2o_cycle();

});
