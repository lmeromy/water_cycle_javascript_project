const WaterData = require('./models/water_data.js');
const WaterCycleView = require('./views/water_cycle_view.js');
const WaterUseInputView = require('./views/water_use_input.js');
const WaterUseChart = require('./views/water_use_chart.js');

const ImageMap = require('./helpers/image_map');

document.addEventListener('DOMContentLoaded', () => {
    // console.log('Javascript Loaded');
    ImageMap('img[usemap]');

    const waterCycleContainer = document.querySelector('#water-cycle-container');
    const waterCycleView = new WaterCycleView(waterCycleContainer);
    waterCycleView.bindEvents();

    const waterUseContainer = document.querySelector('#water-use-vis-form');
    const waterUseInputView = new WaterUseInputView(waterUseContainer);
    waterUseInputView.bindEvents();

    const waterUseChartContainer = document.querySelector('#water-use-charts')
    const waterUseChart = new WaterUseChart(waterUseChartContainer);
    waterUseChart.bindEvents();

    const waterCycleUrl = 'http://localhost:3000/api/water-cycle';
    const waterCycle = new WaterData(waterCycleUrl);
    waterCycle.getData_h2o_cycle();

    const waterUseUrl = 'http://localhost:3000/api/water-use';
    const waterUse = new WaterData(waterUseUrl);
    // waterUse.getData_h2o_use();
    waterUse.bindEvents();

    const waterQuizUrl = 'http://localhost:3000/api/water-quiz';
    const waterQuiz = new WaterData(waterQuizUrl);
    waterQuiz.getData_quiz();
    // waterUse.bindEvents();

});
