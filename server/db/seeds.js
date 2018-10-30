use water_data;
db.dropDatabase();

db.water_cycle.insertMany([
  {
    name: "Ocean",
    description: "Did you know that most of the earth's water is held in the oceans? More than 96% of all water on earth is ocean water!!",
    image: "./images/ocean.jpg"
  },
  {
    name: "Evaporation",
    description: "Energy from the sun heats up the water on Earth. Some of the water evaporates into the air. Evaporation means that water changes from liquid form into a gas (called water vapour). ",
    image: "./images/Evaporation.jpg"
  },
  {
    name: "Clouds",
    description: "Clouds are really just big groups of tiny water drops. When the water vapour rises from the surface, it cools and 'condenses' back into liquid water which forms clouds. The clouds get bigger and move around in the atmosphere.",
    image: "./images/Clouds.jpg"
  },
  {
    name: "Precipitation",
    description: "Sometimes too much water in a cloud has condensed, and the cloud is too heavy to stay up in the air. So the water in the cloud falls back down to Earth as rain or snow. This is 'Precipitation'. ",
    image: "./images/Precipitation.jpg"
  },
  {
    name: "Mountains",
    description: "When precipitation falls in cold places (like mountains or other cold climates), it falls as solid water, or 'snow'. This snow sometimes melts into liquid water when it gets warmer, or it gets stored for later where it falls.",
    image: "./images/Mountains.jpg"
  },
  {
    name: "Forests",
    description: "When precipitation falls in forests or other places where plants and trees grow, the plants can drink up some of the water so they can survive and grow. Some of the water goes into the ground or into nearby lakes and rivers. And some of it goes back up into the atmosphere by evaporation.",
    image: "./images/Forests.jpg"
  },
  {
    name: "Lakes and Rivers",
    description: "Some precipitation lands in lakes and rivers. The water can then seep into the ground, get used by plants, animals, and humans, or eventually flow back into the ocean.",
    image: "./images/Rivers.jpg"
  },
  {
    name: "Groundwater",
    description: "Some water from the earth's surface ends up in the ground. This water flows from the surface down through the tiny spaces between bits of soil and rock, and sometimes stays underground for many centuries in pools called 'aquifers'. Other times, the groundwater slowly flows under the surface. It will eventually reach a river or even an ocean.",
    image: "./images/Groundwater.jpg"
  },
  {
    name: "Cities",
    description: "We use water every day! People use water for all kinds of things; We drink it, we shower or take baths, we wash clothes, we grow food, we use it to run factories, and we use it to make our toilets work! ",
    image: "./images/Cities.jpg"
  }
]);

db.water_use.insertMany([
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
    teeth:0,
    flush:0,
    bathe:0,
    diet: 0
  }
]);

db.quiz.insertMany([
  {
    question: 1,
    q_text: "What is word for water that falls from clouds in the atmosphere?",
    answers: ["H2O", "Precipitation", "Manna from heaven"],
    correct: "Precipitation"
  },
  {
    question: 2,
    q_text: "How does water get from the ocean to the atomsphere?",
    answers: ["Evaporation", "Mutation", "Vacation"],
    correct: "Evaporation"
  },
  {
    question: 3,
    q_text: "Where does water go after it falls to Earth?",
    answers: ["Into rivers", "It flows into the ground", "Plants drink it", "All of the above!"],
    correct: "All of the above!"
  }

]);
