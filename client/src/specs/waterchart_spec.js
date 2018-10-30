const assert = require('assert');
const waterChartData = require('../views/water_use_chart.js');

describe('waterUseChart', function() {
  let data;

  beforeEach(function() {
    data = [
      {
        name: "avgUKUser",
        teeth: 15,
        flush: 45,
        bathe: 85,
        meat: 4000,
        veggie: 2000,
        vegan: 1500
      },
      {
        name: "newUser",
        teeth:15,
        flush:35,
        bathe:92,
        diet: 4000
      }
    ];

  it('should sum visible (domestic) water use', function() {
    const expected = prepareVisWaterUse(data);
    assert.deepStrictEqual([145, 142], expected);
  });

  it('should create an array of invis water use', function() {
    const expected = prepareInvisWaterUse(data);
    assert.deepStrictEqual([4000, 2000, 1500, 4000], expected);
  });


});
