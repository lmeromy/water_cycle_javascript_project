use water_data;
db.dropDatabase();

db.water_cycle.insertMany([
  {
    name: "Ocean",
    description: "Did you know that most of the earth's water is held in the oceans? More than 96% of all water on earth is ocean water!"
  },
  {
    name: "Evaporation",
    description: "Energy from the sun heats up the water on earth. Some of the water evaporates into the air. Evaporation means that water changes from liquid into a gas (called water vapour). "
  },
  {
    name: "Clouds",
    description: "Clouds are really just big groups of tiny water drops. When the water vapour rises from the surface, it cools and 'condenses' back into liquid water which forms clouds. The clouds get bigger and move around in the atmosphere."
  },
  {
    name: "Precipitation",
    description: "Sometimes too much water in a cloud has condensed, and the cloud is too heavy to stay up in the air. So the water in the cloud falls back down to Earth as rain or snow. This is 'Precipitation'. "
  },
  {
    name: "Mountains",
    description: "When precipitation falls in cold places (like mountains or other cold climates), it falls as solid water, or 'snow'. This snow sometimes melts into liquid water when it gets warmer, or it gets stored for later where it falls."
  },
  {
    name: "Forests",
    description: "When precipitation falls in forests or other places where plants and trees grow, the plants can drink up some of the water so they can survive and grow. Some of the water goes into the ground or into nearby lakes and rivers. And some of it goes back up into the atmosphere by evaporation."
  },
  {
    name: "Lakes and Rivers",
    description: "Some precipitation lands in lakes and rivers. The water can then seep into the ground, get used by plants, animals, and humans, or eventually flow back into the ocean."
  },
  {
    name: "Groundwater",
    description: "Some water from the earth's surface ends up in the ground. This water flows down through the tiny spaces between bits of soil and rock, and sometimes stays under the ground for many centuries in pools called 'aquifers'. Other times, the groundwater continues to flow down and horizontally toward a river. It will eventually reach the river or even the ocean."
  },
  {
    name: "Cities",
    description: "We use water! People use water for all kinds of things. We drink it, we shower or take baths, we wash clothes, we grown food, we use it to run factories, and we use it to make our toilets work! "
  }
]);

db.water_use.insertMany([
  {
    name: "avgUKUser",
    diet: 2,
    brushteeth: 3
  }
]);
