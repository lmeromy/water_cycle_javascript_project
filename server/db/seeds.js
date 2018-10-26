use water_data;
db.dropDatabase();

db.water_cycle.insertMany([
  {
    name: "Ocean",
    description: "The largest water source on the planet"
  },
  {
    name: "Evaporation",
    description: "Water from ..."
  },
  {
    name: "Clouds",
    description: "Clouds are..."
  }
]);

db.water_use.insertMany([
  {
    name: "avgUKUser",
    diet: 2,
    brushteeth: 3
  }
]);
