const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Arts collection and inserts the Arts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dreamtimedesigns"
);

const artSeed = [];

db.Art
  .remove({})
  .then(() => db.Art.collection.insertMany(artSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
