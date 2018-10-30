const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const bodyParser = require('body-parser')

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('water_data');
    const waterCycleCollection = db.collection('water_cycle');
    const waterCycleRouter = createRouter(waterCycleCollection);
    app.use('/api/water-cycle', waterCycleRouter);
    const waterUseCollection = db.collection('water_use');
    const waterUseRouter = createRouter(waterUseCollection);
    app.use('/api/water-use', waterUseRouter);
    const waterQuizCollection = db.collection('quiz');
    const waterQuizRouter = createRouter(waterQuizCollection);
    app.use('/api/water-quiz', waterQuizRouter);
  })
  .catch(console.err);

  app.listen(3000, function () {
    console.log(`Listening on port ${this.address().port}`);
  });
